'use client'
import React, { useEffect, useRef } from 'react'

import { Box } from '@mui/material'
import gsap from 'gsap'

function RoundAnimation() {
   const boxRef = useRef(null)

   useEffect(() => {
     gsap.to(boxRef.current, {
       duration: 12, // Adjusted for smooth transition
       repeat: -1, // Infinite loop
       yoyo: true, // Yoyo effect for back and forth animation
       ease: 'none', // Power2 for smooth easing
       keyframes: [
         {
           borderRadius: '80% 35% 85% 40% / 55% 60% 80% 45%',
           duration: 3
         },

         {
           borderRadius: '45% 80% 50% 85% /30% 35% 65% 40% ',
           duration: 3
         },

         {
           borderRadius: '100% 100% 40% 100% /40% 35% 65% 40% ',
           duration: 3
         },
         {
           borderRadius: '40% 80% 80% 70% /40% 35% 65% 80% ',
           duration: 3
         }
       ]
     })
   }, [])

   return (
     <Box
       sx={{
         backgroundColor: '#08051F',
         height: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
       }}
     >
       <Box
         ref={boxRef}
         sx={{
           width: '470px',
           height: '470px',
           borderRadius: '50%',
           rotate: '113.38 deg',
           background: `conic-gradient(from 186.34deg at 55.14% 53.75%, #5C0E4C -12.6deg, #533DD2 2.75deg, #5C0E4C 2.78deg, #591D75 41.89deg, #58248A 61.45deg, #562B9F 81deg, #591E7A 100.89deg, #5C0E4C 126deg, #5C0E4C 157.74deg, #5C0E4C 171deg, #504DFF 180deg, #562DA4 191.46deg, #5C0E4C 221.4deg, #5C0E4C 254.73deg, #5C0E4C 288.06deg, #5C0E4C 315.3deg, #5C0E4C 347.4deg, #533DD2 362.75deg)`,

           boxShadow:
             '-249.75px -79.75px 49.75px 80px #47165D97,inset -19.75px 19.75px 19.75px 0px #47165D97, inset -9.88px 9.88px 9.88px 0px #FFFFFF97,inset 19.75px -19.75px 19.75px 0px #FFFFFF97, inset 9.88px -9.88px 9.88px 0px #47165D97'
         }}
       >
         {' '}
       </Box>
     </Box>
   )
}

export default RoundAnimation
