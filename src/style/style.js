export const globalCustomStyle = {
    global: {
        inputField: {
            '& .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: '2px solid',
                borderColor: '#B9D0FF !important'
            },
            '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '3px solid',
                borderColor: '#B9D0FF !important'
            },
            '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                color: '#1F1373 !important'
            }

        },
        btnFigma: {
            background: 'var(--background-blue-figma)',
            color: 'white',
            fontWeight: '600',
            py: '11px'
        },
        checkBoxColor: {
            color: '#1B126C',
            '&.Mui-checked': {
                color: '#1B126C'
            }
        },
        tableCheckboxColor: {
            '&.Mui-checked': {
                stroke: 'white !important',
                fill: 'none !important',
                color: 'transparent',
                background: 'none !important'
            },
            '&.MuiCheckbox-root.MuiCheckbox-root svg path': {
                stroke: 'white !important'
            },
            '&.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-indeterminate': {
                color: 'transparent',
                stroke: 'white !important'
            }
        },
        tableHeaderTextColor: {
            color: 'white !important',
            '& :hover': {
                color: 'white !important'
            },
            '& :focus': {
                color: 'white !important'
            },
            '& .MuiTableSortLabel-root .MuiTableSortLabel-icon': {
                color: 'white !important'
            },
            '& .MuiTableSortLabel-root.Mui-active': {
                color: 'white !important'
            },
            '& .MuiTableSortLabel-root.Mui-active': {
                color: 'white !important'
            },
            '& .MuiTableSortLabel-root.Mui-active:hover': {
                color: 'white !important'
            },
            '& .MuiTableSortLabel-root.Mui-active:focus': {
                color: 'white !important'
            }
        }
    },
    firstTab: {
        headerTopText: {
            fontWeight: '400',
            color: '#9D9D9D',
            textAlign: 'center',
            pb: 3,
            maxWidth: { sm: '50%' },
            fontSize: '12px',
            lineHeight: '18px'
        },
        innerGrid: {
            justifyContent: 'space-between',
            height: '100%'
        },
        innerGridBox: {
            display: 'flex',
            gap: '20px',
            
            height: '100%',
            flexDirection: 'column',
            borderRadius: '20px',
            width: '100%',
        },
    },
    automationTab: {
        innerGrid: {
            // minHeight: '440px',
            justifyContent: 'space-between',
            p: { xs: '25px 25px 0px', md: '90px 55px' }
        },
        innerGridBox: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            height: 'initial',
            height: '100%',
            flexDirection: 'column',
            borderRadius: '20px',
            width: '100%',
        },
        mainBox: {
            border: { sm: '2px solid #B9D0FF' },
            borderRadius: '10px',
            mt: 0,
            p: {xs:'20px 0px 0px 0px', sm: '50px 35px' }
        },
        innerMainBox: {
            border: '2px dashed #1F1373',
            borderRadius: '10px',
            mt: 0,
            height: '100%'
        }
    }
}

