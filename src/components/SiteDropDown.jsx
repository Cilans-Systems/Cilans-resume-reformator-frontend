import * as React from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { Box, Button, Divider } from '@mui/material'

const ITEM_HEIGHT = 100
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      border: '2px dashed #1B126C'
    }
  }
}

const SiteDropDown = React.forwardRef((props, ref) => {
  const { onChange, placeholder, value, options } = props
  const [open, setOpen] = React.useState(false)
  const [tempValue, setTempValue] = React.useState(value) // Temporary state to track selected values
  const [confirmedValue, setConfirmedValue] = React.useState(value) // Confirmed value

  const customStyle = {
    outlinedInput: {
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C !important'
      },
      '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C !important'
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C'
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C'
      },
      '&.MuiPopover-paper .MuiMenu-paper': {
        border: '2px dashed #f0f0f0'
      }
    },
    selectStyle: {
      '&.MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C !important'
      },
      '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1B126C !important'
      },
      '& .MuiSelect-icon': { color: '#1B126C' },
      '& .MuiCheckbox-root .MuiSvgIcon-root': {
        color: '#1B126C'
      },
      '& .MuiMenuItem-root.Mui-selected': {
        backgroundColor: '#e0e0e0',
        color: '#1B126C'
      },
      '& .MuiMenuItem-root:hover': {
        backgroundColor: '#f0f0f0',
        color: '#1B126C'
      }
    }
  }

  const handleMenuOpen = () => {
    setOpen(true)
    setTempValue(confirmedValue) // Reset to confirmed value when dropdown opens
  }

  const handleMenuClose = () => {
    setOpen(false)
    setTempValue(confirmedValue) // Reset to confirmed value if closing without saving
  }

  const handleDoneClick = () => {
    setOpen(false)
    setConfirmedValue(tempValue) // Update confirmed value when "Done" is clicked
    onChange({ target: { value: tempValue } }) // Set the value when "Done" is clicked
  }

  const handleChange = event => {
    setTempValue(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, width: {sm:300} }} fullWidth>
      <Select
        id='demo-multiple-checkbox'
        multiple
        open={open}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        value={tempValue}
        onChange={handleChange}
        input={<OutlinedInput sx={customStyle.outlinedInput} />}
        renderValue={selected => {
          if (selected?.length === 0 || !selected) {
            return <div>{placeholder}</div>
          }

          return selected.join(', ')
        }}
        MenuProps={MenuProps}
        sx={customStyle.selectStyle}
        displayEmpty
      >
        {options &&
          options.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox
                checked={tempValue.indexOf(name) > -1}
                sx={{
                  color: '#1B126C',
                  '&.Mui-checked': {
                    color: '#1B126C'
                  }
                }}
              />
              <ListItemText primary={name} sx={{ color: '#1B126C' }} />
            </MenuItem>
          ))}
        <Box sx={{ p: '8px 16px' }}>
          <Button
            fullWidth
            variant='contained'
            sx={{
              background: 'var(--background-blue-figma)',
              color: 'white'
            }}
            onClick={handleDoneClick} // Save and close menu on button click
          >
            Done
          </Button>
        </Box>
        <Divider />
        <Box sx={{ p: '8px 16px', cursor: 'pointer' }}>
          <ListItemText primary={'Suggest Site'} sx={{ color: '#1B126C', textAlign: 'center' }} />
        </Box>
      </Select>
    </FormControl>
  )
})

export default SiteDropDown
