import React from 'react'

import Image from 'next/image'

const Sources = () => {
  return (
    <div className='revolution_container md:min-h-screen min-h-[150vh]'>
      <div className='sources_container min-h-screen'></div>
      <div className='flex text-white py-20 items-center justify-center w-full lg:flex-row flex-col gap-7 absolute top-0 bottom-0 z-20 min-h-screen'>
        <div className='max-w-[542px] text-center sm:text-left'>
          <h1 className='sm:text-[60px]'>Our Sources</h1>
          <p className='lg:text-[20px] mt-10'>
            We prioritise judgements from state and federal courts, including the Supreme Court of India. However, our
            platform is flexible and can support any web platform offering free and open access to the public.
          </p>
          <p className='mt-5 lg:text-[20px]'>
            Explore the future of legal research with iLegalAI. Your trusted partner in legal intelligence.
          </p>
        </div>
        <div className='max-w-[665.93px]'>
          <Image
            src='/images/landing/sources.svg'
            width={600}
            height={500}
            alt=''
            className='
          w-full object-contain lg:w-full lg:h-[600px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Sources
