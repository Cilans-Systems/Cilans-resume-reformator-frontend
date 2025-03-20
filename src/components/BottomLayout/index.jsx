import React from 'react'

import Image from 'next/image'

import Footer from '../LandingPage/Footer'

const BottomLayout = () => {
  return (
    <>
      <div className='relative revolution_container'>
        <div className='sources_container min-h-fit'></div>
        <div className='flex text-white py-20 absolute top-[-350px] -z-10 right-0 w-fit'>
          <Image src='/images/landing/smallCircle.svg' width={368} height={368} className='w-fit' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BottomLayout
