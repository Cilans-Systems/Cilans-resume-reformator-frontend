import React from 'react'

import Image from 'next/image'

import { Button } from '@mui/material'

// import RoundAnimation from '../RoundAnimation/RoundAnimation'

const Discover = ({ title, displaySubTitle, description }) => {
  return (
    <div className='pt-10 w-full grid place-content-center min-h-screen'>
      <div className='relative w-fit ml-10'>
        <Image 
          src='/images/landing/blurBackground.svg'
          className='lg:w-[733px] lg:h-[733px] w-[90%] object-contain'
          width={933}
          height={933}
        />
        <Image
          src='/images/landing/circle.svg'
          width={520}
          height={520}
          className='absolute lg:top-32 lg:right-[-50px] w-[50%] h-[50%] lg:w-[520px] lg:h-[520px] object-contain right-[0px] top-56'
        />

        {// <RoundAnimation />
          }
        
          <div className='text-white absolute lg:top-32 lg:left-[-250px] sm:left-[50px] sm:top-[25%] top-[40%] left-[-20px] '>
          <h1 className='lg:text-[100px] sm:text-7xl'>{title ? title : 'Discover'}</h1>
          {displaySubTitle ? (
            <>
              <h1 className='lg:text-[100px] sm:text-7xl sm:mt-5'>LegalAI</h1>
              <p className='lg:text-[35px] mt-8 sm:text-2xl text-sm'>Your Legal Research Partner</p>
            </>
          ) : (
            <p className='max-w-[486px] mt-3 leading-10 sm:text-[35px]'>{description}</p>
          )}
          {displaySubTitle && (
            <Button className='mt-10 text-white border-2 border-white' variant='outlined'>
              Know More
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Discover
