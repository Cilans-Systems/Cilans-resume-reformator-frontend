
import { Box, Typography } from '@mui/material'

function CustomLoader() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                zIndex: '9999',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                height: '100%',
                backgroundColor: '#00236f61',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '10px',
                minWidth: '350px',
                gap: '0px',
                p: '40px',
                backgroundColor: 'rgba(248, 248, 255, 1)',
                boxShadow: 'inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}
            >
                {// <CircularProgress sx={{ color: '#ffffff !important' }} />
                }
                <Box>
                    <Box sx={{ height: '30px', width: '30px' }}>
                    </Box>
                </Box>
                <div id="wifi-loader">
                    <svg class="circle-outer" viewBox="0 0 86 86">
                        <circle class="back" cx="43" cy="43" r="40"></circle>
                        <circle class="front" cx="43" cy="43" r="40"></circle>
                        <circle class="new" cx="43" cy="43" r="40"></circle>
                    </svg>
                    <svg class="circle-middle" viewBox="0 0 60 60">
                        <circle class="back" cx="30" cy="30" r="27"></circle>
                        <circle class="front" cx="30" cy="30" r="27"></circle>
                    </svg>
                    <svg class="circle-inner" viewBox="0 0 34 34">
                        <circle class="back" cx="17" cy="17" r="14"></circle>
                        <circle class="front" cx="17" cy="17" r="14"></circle>
                    </svg>
                </div>
                <Box>
                    <Box sx={{ height: '30px', width: '30px' }}>
                    </Box>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: '900', color: '#3d22b3' }}>
                    AI will process the resume please stay tune.
                </Typography>

            </Box>
        </Box>
    )
}

export default CustomLoader