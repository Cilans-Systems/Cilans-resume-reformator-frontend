/**
 * This is an advanced example for creating icon bundles for Iconify SVG Framework.
 *
 * It creates a bundle from:
 * - All SVG files in a directory.
 * - Custom JSON files.
 * - Iconify icon sets.
 * - SVG framework.
 *
 * This example uses Iconify Tools to import and clean up icons.
 * For Iconify Tools documentation visit https://docs.iconify.design/tools/tools2/
 */
import { promises as fs } from 'node:fs';
import { dirname, join } from 'node:path';

// Installation: npm install --save-dev @iconify/tools @iconify/utils @iconify/json @iconify/iconify
import { cleanupSVG, importDirectory, isEmptyColor, parseColors, runSVGO } from '@iconify/tools';
import { getIcons, getIconsCSS, stringToIcon } from '@iconify/utils';

const sources = {
  json: [
    // Iconify JSON file
    await import.meta.resolve('@iconify/json/json/ri.json'),

    // Custom file with only a few icons
    {
      filename: await import.meta.resolve('@iconify/json/json/line-md.json'),
      icons: ['home-twotone-alt', 'github', 'document-list', 'document-code', 'image-twotone']
    }
  ],
  icons: [
    'bx-basket',
    'bi-airplane-engines',
    'tabler-anchor',
    'uit-adobe-alt',
    'twemoji-auto-rickshaw'
  ],
  svg: []
};

const target = join(process.cwd(), 'generated-icons.css');

(async function () {
  // Create directory for output if missing
  const dir = dirname(target);
  
  await fs.mkdir(dir, { recursive: true }).catch(() => { });

  const allIcons = [];

  // Convert sources.icons to sources.json
  if (sources.icons) {
    const sourcesJSON = sources.json || (sources.json = []);
    const organizedList = organizeIconsList(sources.icons);

    for (const prefix in organizedList) {
      const filename = await import.meta.resolve(`@iconify/json/json/${prefix}.json`);

      sourcesJSON.push({ filename, icons: organizedList[prefix] });
    }
  }

  // Bundle JSON files and collect icons
  for (const item of sources.json) {
    const filename = typeof item === 'string' ? item : item.filename;
    const content = JSON.parse(await fs.readFile(new URL(filename, import.meta.url), 'utf8'));

    if (typeof item !== 'string' && item.icons?.length) {
      const filteredContent = getIcons(content, item.icons);

      if (!filteredContent) throw new Error(`Cannot find required icons in ${filename}`);
      allIcons.push(filteredContent);
    } else {
      allIcons.push(content);
    }
  }

  // Generate CSS from collected icons
  const cssContent = allIcons
    .map(iconSet => getIconsCSS(iconSet, Object.keys(iconSet.icons), { iconSelector: '.{prefix}-{name}' }))
    .join('\n');

  // Save the CSS to a file
  await fs.writeFile(target, cssContent, 'utf8');
  console.log(`Saved CSS to ${target}!`);
})().catch(console.error);

function organizeIconsList(icons) {
  const sorted = {};

  icons.forEach(icon => {
    const item = stringToIcon(icon);

    if (!item) return;
    const prefix = item.prefix;

    if (!sorted[prefix]) sorted[prefix] = [];

    if (!sorted[prefix].includes(item.name)) sorted[prefix].push(item.name);
  });

  return sorted;
}
