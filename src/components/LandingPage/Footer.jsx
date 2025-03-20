import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='sm:min-h-[500px] min-h-[116vh] lg:min-h-[369px] relative revolution_container'>
      <div className='sources_container sm:min-h-[500px] min-h-[116vh] lg:min-h-[369px]'></div>
      <div className='text-white'>
        <div className='glass-container bottom-0 w-full sm:min-h-[500px] min-h-[116vh] lg:min-h-[369px] absolute top-0 rounded-none flex-col border-none'>
          <div className='flex w-full justify-around flex-wrap'>
            <div className='text-center'>
              <h1>LegalGPT</h1>
              <p className='max-w-[418px] mt-3'>
                Legal GPT is a Generative AI platform that streamlines legal research and case study by efficiently
                finding precedents, judgments, and similar cases by allowing users to input case details.
              </p>
              <div className='mt-6 flex items-center justify-center w-fit sm:mr-auto gap-5 m-auto'>
                <Image src='/images/landing/linkedin.svg' width={20} height={20} className='cursor-pointer' />
                <Image src='/images/landing/twitter.svg' width={20} height={20} className='cursor-pointer' />
                <Image src='/images/landing/facebook.svg' width={20} height={20} className='cursor-pointer' />
              </div>
            </div>
            <div className='flex sm:gap-32 gap-10 my-10 flex-wrap'>
              <div className='flex flex-col items-start gap-7'>
                <h1 className='text-[20px]'>Product</h1>
                <div className='flex flex-col items-start gap-4'>
                  <p className='text-[16px]'>Features</p>
                  <p className='text-[16px]'>Use Cases</p>
                  <Link href={'/faqs'}>
                    <p className='text-[16px]'>FAQ</p>
                  </Link>
                </div>
              </div>
              <div className='flex flex-col items-start gap-7'>
                <h1 className='text-[20px]'>Company</h1>
                <div className='flex flex-col items-start gap-4'>
                  <p className='text-[16px]'>Careers</p>
                  <p className='text-[16px]'>About Us</p>
                  <p className='text-[16px]'>Privacy Policy</p>
                </div>
              </div>
              <div className='flex flex-col items-start gap-7'>
                <h1 className='text-[20px]'>Contact us</h1>
                <div className='flex flex-col items-start gap-4'>
                  <p className='text-[16px] flex items-center gap-2'>
                    <Image src='/images/landing/phone.svg' width={20} height={20} />
                    +91 7043122287
                  </p>
                  <p className='text-[16px] flex items-center gap-2'>
                    <Image src='/images/landing/email.svg' width={20} height={20} />
                    cilans.net.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className='text-[14px]'>© 2024 All rights reserved by LegalGPT.ai</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
