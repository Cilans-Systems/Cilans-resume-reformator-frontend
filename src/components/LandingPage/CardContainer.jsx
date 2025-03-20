import React from 'react'

import Image from 'next/image'

const CardContainer = () => {
  return (
    <div className='revolution_container pt-16 min-h-[600px] z-50'>
      <div className='glass-container min-h-[346px] max-h-fit max-w-[1196px] w-full '>
        <div className='flex items-start justify-around gap-20 w-full flex-wrap  '>
          <div className='text-white flex items-center flex-col w-fit'>
            <Image
              src='/images/landing/ai.svg'
              width={110}
              height={110}
              className='w-[100px] h-[100px] object-contain'
            />
            <p className='text-[20px] mt-5 font-[600]'>AI-Powered</p>
            <p className='text-[20px] font-[600]'>Insights</p>
          </div>
          <div className='text-white flex items-center flex-col w-fit'>
            <Image
              src='/images/landing/efficient.svg'
              width={110}
              height={110}
              className='w-[100px] h-[100px] object-contain'
            />
            <p className='text-[20px] mt-5 font-[600]'>Efficient and Time</p>
            <p className='text-[20px] font-[600]'>Saving</p>
          </div>
          <div className='text-white flex items-center flex-col w-fit'>
            <Image
              src='/images/landing/coverage.svg'
              width={110}
              height={110}
              className='w-[100px] h-[100px] object-contain'
            />
            <p className='text-[20px] mt-5 font-[600]'>Comprehensive</p>
            <p className='text-[20px] font-[600]'>Coverage</p>
          </div>
          <div className='text-white flex items-center flex-col w-fit'>
            <Image
              src='/images/landing/trusted.svg'
              width={110}
              height={110}
              className='w-[100px] h-[100px] object-contain'
            />
            <p className='text-[20px] mt-5 font-[600]'>Trusted Sources</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContainer
