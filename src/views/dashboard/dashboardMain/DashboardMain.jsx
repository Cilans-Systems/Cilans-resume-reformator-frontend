'use client'
import { useEffect, useState } from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material'
import { MuiChipsInput } from 'mui-chips-input'

import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { selectLoader, selectUser, startLoader, stopLoader } from '@/redux/rootSlice'
import { globalCustomStyle } from '@/style/style'
import { DeleteSelectedFileIcon, ResumeIcon, UploadIcon } from '@/svgIcons/SvgIcons'

import WidthCalculation from '@/utils/widthCalculation/widthCalculation'

function DashboardMain({ handleNextTab }) {
  const windowWidth = WidthCalculation()
  const fileTypes = 'singleSelect'
  const user = useSelector(selectUser)
  const loading = useSelector(selectLoader)
  const dispatch = useDispatch()

  const [formateName, setFormateName] = useState('Tallahassee')
  const [validationError, setValidationError] = useState(null)
  const [chips, setChips] = useState([])
  const [files, setFiles] = useState([])

  // Removed downloadUrl and downloadFilename as they're no longer needed
  const [aiGeneratedSummary, setAiGeneratedSummary] = useState(false)

  // Function to handle chip changes
  const handleChange = newChips => {
    // Trim whitespace and remove duplicates
    const sanitizedChips = Array.from(new Set(newChips.map(chip => chip.trim()))).filter(chip => chip.length > 0)

    setChips(sanitizedChips)
  }

  // Function to clear all chips
  const handleClickRemove = () => {
    setChips([])
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleUploadClick = () => {
    document?.getElementById('fileInput')?.click()
  }

  const handleDragOver = event => {
    event.preventDefault()
  }

  const handleDragLeave = () => {}

  const handleDrop = event => {
    event.preventDefault()
    const droppedFiles = Array.from(event.dataTransfer.files)

    validateAndSetFiles(droppedFiles)
  }

  const handleFileChange = event => {
    const selectedFiles = Array.from(event.target.files || [])

    validateAndSetFiles(selectedFiles)
  }

  const validateAndSetFiles = async selectedFiles => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setValidationError('No file selected')

      return
    }

    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX
    ]

    const invalidFiles = selectedFiles.filter(file => !allowedTypes.includes(file.type))

    if (invalidFiles.length > 0) {
      setValidationError('Invalid file type. Please upload a PDF or DOCX file.')
      setFiles([])
      document.getElementById('fileInput').value = ''

      return
    }

    const newFiles =
      fileTypes === 'multiple' ? [...selectedFiles] : [selectedFiles[0]].filter(file => file !== undefined)

    setFiles(newFiles)
    setValidationError(null)
  }

  const handleUpload = async () => {
    if (!files[0]) {
      alert('Please select a file to upload.')

      return
    }

    const formData = new FormData()

    formData.append('file', files[0])

    // Append keywords as JSON string
    formData.append('keywords', JSON.stringify(chips))

    // Append AI summary and resume format
    formData.append('ai_generated_summary', aiGeneratedSummary)
    formData.append('resume_format', formateName)

    try {
      dispatch(startLoader())

      const response = await fetch(process.env.NEXT_PUBLIC_APP_URL + '/file-upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data && data?.task_id) {
        handleCelary(data.task_id)
      } else {
        console.error('Error: ' + data.error)
        dispatch(stopLoader())
        notify(data?.message || 'oops! Something went wrong.')
      }
    } catch (error) {
      console.error('Error:', error)
      notify('oops! Something went wrong.')
      dispatch(stopLoader())
    }
  }

  const handleCelary = async id => {
    try {
      dispatch(startLoader())

      const TaskId = id

      const response = await fetch(process.env.NEXT_PUBLIC_APP_URL + `/result/${TaskId}`, {
        method: 'GET'
      })

      const data = await response.json()

      if (data.state !== 'PENDING') {
        const byteCharacters = atob(data.file_content)
        const byteNumbers = new Array(byteCharacters.length)

        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)

        const blob = new Blob([byteArray], {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })

        // Create a URL for the blob
        const url = URL.createObjectURL(blob)
        const filename = data.filename.replace(/\.[^/.]+$/, '.docx') // Ensure .docx extension

        // Create a temporary anchor element to trigger download
        const link = document.createElement('a')

        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()

        // Clean up
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        dispatch(stopLoader())
        handleClickRemove()
        setFiles([])
        document.getElementById('fileInput').value = ''
      } else {
        setTimeout(() => handleCelary(id), 10000)
      }
    } catch (error) {
      console.error('Error:', error)
      dispatch(stopLoader())
      notify('oops! Something went wrong.')
    }
  }

  const notify = error => {
    toast.error(error, {
      type: 'error', // can be 'info', 'success', 'warning', 'error', or 'default'
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true
    })
  }

  // New handlePaste function to split pasted keywords
  const handlePaste = event => {
    event.preventDefault()
    const paste = (event.clipboardData || window.clipboardData).getData('text')

    const pastedChips = paste
      .split(',')
      .map(chip => chip.trim())
      .filter(chip => chip.length > 0)

    setChips(prevChips => {
      // Combine existing chips with pasted chips and remove duplicates
      const combinedChips = [...prevChips, ...pastedChips]

      return Array.from(new Set(combinedChips.map(chip => chip.trim()))).filter(chip => chip.length > 0)
    })
  }

  useEffect(() => {
    dispatch(stopLoader())
  }, [])

  const customStyles = {
    inputFields: {
      '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
        color: 'var(--mui-palette-text-secondary)'
      },
      '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--mui-palette-customColors-inputBorder)'
      }
    }
  }

  return (
    user && (
      <div>
        <Box
          sx={{
            m: 2,
            boxShadow: '0px 0px 10px',
            borderRadius: '10px',
            p: { xs: '20px 20px', sm: '40px 40px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box
              sx={{
                p: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                maxWidth: '445px',
                width: { xs: '100%', sm: '445px' },
                textAlign: 'center',
                background: 'rgba(248, 248, 255, 1)',
                border: '2px dashed rgba(185, 208, 255, 1)',
                borderRadius: '4px'
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Box>
                <UploadIcon />
              </Box>
              <Typography sx={{ fontWeight: '700', color: 'black', fontSize: '16px', lineHeight: '24px' }}>
                Drag & drop files or{' '}
                <u style={{ color: 'rgba(72, 62, 168, 1)', cursor: 'pointer' }} onClick={handleUploadClick}>
                  Browse
                </u>
              </Typography>
              <Typography sx={{ color: 'black', fontSize: '12px', lineHeight: '18px' }}>
                Supported formats: PDF, DOCX
              </Typography>
              <Button
                variant='contained'
                sx={{ ...globalCustomStyle.global.btnFigma, maxWidth: '270px' }}
                onClick={handleUploadClick}
              >
                Upload Resume
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                  <ResumeIcon style={{ width: '22px' }} />
                </Box>
              </Button>
              <input
                type='file'
                id='fileInput'
                name='file'
                accept='application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple={fileTypes === 'multiple'}
              />
            </Box>
            {validationError && (
              <div
                style={{
                  color: 'red',
                  fontSize: '0.75rem',
                  lineHeight: 1.66,
                  marginTop: '3px',
                  textAlign: 'center'
                }}
              >
                {validationError}
              </div>
            )}
            {files.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid rgba(17, 175, 34, 1)',
                  p: '9px 10px',
                  borderRadius: '4px'
                }}
              >
                <Typography sx={{ color: 'black', fontSize: '12px' }}>{files[0].name}</Typography>
                <DeleteSelectedFileIcon
                  style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                  onClick={() => {
                    setFiles([])
                    document.getElementById('fileInput').value = ''
                  }}
                />
              </Box>
            )}
          </Box>
          <Typography sx={{ fontWeight: '700', color: 'rgba(27, 18, 108, 1)', fontSize: '16px', lineHeight: '24px' }}>
            Select any one resume Template
          </Typography>
          <Box>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                gap: '10px',
                padding: '2px', // Space for the moving background
                border: '1px solid',
                borderRadius: '25px',
                width: '270px', // Total width of both buttons (2 x 130px + gap)
                overflow: 'hidden'
              }}
            >
              {/* Background that moves between the two buttons */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: formateName === 'Tallahassee' ? '0%' : '50%',
                  width: '50%',
                  height: '100%',
                  background: 'var(--background-blue-figma-btn)',
                  borderRadius: '25px',
                  transition: 'left 0.5s ease'
                }}
              ></Box>

              {/* Tallahassee Button */}
              <Button
                sx={{
                  zIndex: 1, // Ensure text appears above the background
                  width: '130px',
                  borderRadius: '25px',
                  backgroundColor: 'transparent', // Transparent to show moving background
                  color: formateName === 'Tallahassee' ? 'white' : 'rgba(27, 18, 108, 1)',
                  transition: 'color 0.5s ease'
                }}
                onClick={() => setFormateName('Tallahassee')}
              >
                Tallahassee
              </Button>

              {/* Turnpike Button */}
              <Button
                sx={{
                  zIndex: 1, // Ensure text appears above the background
                  width: '130px',
                  borderRadius: '25px',
                  backgroundColor: 'transparent', // Transparent to show moving background
                  color: formateName === 'Turnpike' ? 'white' : 'rgba(27, 18, 108, 1)',
                  transition: 'color 0.5s ease'
                }}
                onClick={() => setFormateName('Turnpike')}
              >
                Turnpike
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                {...label}
                checked={aiGeneratedSummary}
                onChange={e => setAiGeneratedSummary(e.target.checked)}
                sx={{ ...globalCustomStyle.global.checkBoxColor }}
              />
              <Typography
                sx={{ fontWeight: '700', color: 'rgba(27, 18, 108, 1)', fontSize: '16px', lineHeight: '24px' }}
              >
                Do you want to Generate AI Based Professional Summary?
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={2} sx={{ height: '100%', gap: { xs: '10px', md: '0px' } }}>
            <Grid item xs={12}>
              <Box sx={globalCustomStyle.firstTab.innerGridBox}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: '10px', sm: '50px' },
                    width: '100%'
                  }}
                >
                  <Typography sx={{ color: '#1F1373', fontWeight: '700' }}>Write Keywords :</Typography>
                  <Button
                    variant='contained'
                    sx={{
                      ...globalCustomStyle.global.btnFigma,
                      width: { sm: '150px' },
                      display: 'flex',
                      gap: '5px',
                      fontSize: '18px',
                      p: { xs: '10px', sm: '7px 20px' }
                    }}
                    onClick={handleClickRemove}
                  >
                    {windowWidth && windowWidth > 600 && 'Clear'}
                    <DeleteOutlinedIcon style={{ width: '20px', height: '20px' }} />
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                  }}
                >
                  <Box>
                    <MuiChipsInput
                      fullWidth
                      multiline
                      max={5}
                      value={chips}
                      onChange={handleChange}
                      placeholder='Education, Experiences, Special skill, Degrees, Special Interest, Words that you want to add.'
                      delimiter=','
                      sx={customStyles.inputFields}
                      inputProps={{
                        onPaste: handlePaste
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: { xs: '100%', sm: 'auto' }
                    }}
                  >
                    <Button
                      variant='contained'
                      disabled={loading || files.length === 0}
                      sx={{
                        ...globalCustomStyle.global.btnFigma,
                        fontSize: '20px',
                        p: '10px 40px'
                      }}
                      onClick={handleUpload}
                    >
                      Generate Resume
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  )
}

export default DashboardMain
