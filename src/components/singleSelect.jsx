import * as React from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import { Box, Button, Typography } from '@mui/material'

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

const SingleSelect = React.forwardRef((props, ref) => {
  const { onChange, placeholder, value, options } = props
  const [open, setOpen] = React.useState(false)
  const [openNumber, setOpenNumber] = React.useState(false)
  const [tempValue, setTempValue] = React.useState(value) // Temporary state to track selected value
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
    setTempValue(confirmedValue)
  }

  const handleMenuOpenNumber = () => {
    setOpenNumber(true)
    setTempValue(confirmedValue) // Reset to confirmed value when dropdown opens
  }

  const handleMenuCloseNumber = () => {
    setOpenNumber(false)
  }

  const handleDoneClick = () => {
    setOpen(false)
    setConfirmedValue(tempValue) // Update confirmed value when "Done" is clicked
    onChange({ target: { value: tempValue } }) // Set the value when "Done" is clicked
  }

  const handleChange = event => {
    setTempValue(event.target.value) // Update the temporary value on item selection
  }

  return (
    <FormControl sx={{ m: 1, width: { sm: 300 } }} fullWidth>
      <Select
        id='single-select'
        open={open}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        value={tempValue}
        onChange={handleChange} // Only update tempValue on selection
        input={<OutlinedInput sx={customStyle.outlinedInput} />}
        renderValue={selected => {
          if (!selected) {
            return <div>{placeholder}</div>
          }

          return selected
        }}
        MenuProps={MenuProps}
        sx={customStyle.selectStyle}
        displayEmpty
      >
        <Box sx={{ p: '8px 16px' }}>
          <Select
            id='single-select'
            fullWidth
            open={openNumber}
            onOpen={handleMenuOpenNumber}
            onClose={handleMenuCloseNumber}
            value={tempValue}
            onChange={handleChange} // Only update tempValue on selection
            input={<OutlinedInput sx={customStyle.outlinedInput} />}
            renderValue={selected => {
              if (!selected) {
                return <div>{placeholder}</div>
              }

              return selected
            }}
            MenuProps={MenuProps}
            sx={customStyle.selectStyle}
            displayEmpty
          >
            <MenuItem
              sx={{ p: '8px 16px' }}
              key={''}
              value={''}
              onClick={e => {
                e.stopPropagation()
                setTempValue('') // Update tempValue on item selection
                // Prevent dropdown from closing
              }}
            >
              <ListItemText primary={'None'} sx={{ color: '#1B126C' }} />
            </MenuItem>

            {options &&
              options.map(option => (
                <MenuItem
                  sx={{ p: '8px 16px' }}
                  key={option}
                  value={option}
                  onClick={e => {
                    e.stopPropagation()
                    setTempValue(option) // Update tempValue on item selection
                    // Prevent dropdown from closing
                  }}
                >
                  <ListItemText primary={option} sx={{ color: '#1B126C' }} />
                </MenuItem>
              ))}
          </Select>
        </Box>

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
      </Select>
    </FormControl>
  )
})

export default SingleSelect
