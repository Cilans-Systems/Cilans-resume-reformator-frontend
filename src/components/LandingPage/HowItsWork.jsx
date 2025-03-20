import React from 'react'

import Image from 'next/image'

const HowItsWork = () => {
  return (
    <div className='relative revolution_container md:min-h-screen min-h-[190vh] z-50 '>
      <div className='sources_container min-h-screen'></div>
      <div className='flex text-white py-20 items-center justify-center w-full lg:flex-row flex-col gap-7 absolute top-0 z-20'>
        <div className='glass-container min-h-[463px] max-h-fit max-w-[1196px] w-full flex-col'>
          <h1 className='sm:text-[48px]'>How It Works.!</h1>
          <div className='flex items-start justify-around gap-20 w-full flex-wrap mt-4'>
            <div className='text-white flex items-center flex-col w-fit'>
              <Image
                src='/images/landing/query.svg'
                width={110}
                height={110}
                className='w-[100px] h-[100px] object-contain'
              />
              <p className='text-[20px] mt-5 font-[600]'>Submit Your Query</p>
              <p className='text-[12px] max-w-[197px] text-center mt-2'>
                Provide keywords about your case or legal question about which you would like to search about through
                our intuitive interface.
              </p>
            </div>
            <div className='text-white flex items-center flex-col w-fit'>
              <Image
                src='/images/landing/analysis.svg'
                width={110}
                height={110}
                className='w-[100px] h-[100px] object-contain'
              />
              <p className='text-[20px] mt-5 font-[600]'>AI Analysis</p>
              <p className='text-[12px] max-w-[197px] text-center mt-2'>
                Our advanced AI processes the information, comparing it against a vast database of legal precedents and
                judgments.
              </p>
            </div>
            <div className='text-white flex items-center flex-col w-fit'>
              <Image
                src='/images/landing/results.svg'
                width={110}
                height={110}
                className='w-[100px] h-[100px] object-contain'
              />
              <p className='text-[20px] mt-5 font-[600]'>Receive Results</p>
              <p className='text-[12px] max-w-[197px] text-center mt-2'>
                Get a curated list of relevant articles and cases that match your query, sourced from trusted legal
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItsWork
