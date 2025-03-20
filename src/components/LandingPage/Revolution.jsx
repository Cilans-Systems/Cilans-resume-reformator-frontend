import React from 'react'

import Image from 'next/image'

const Revolution = () => {
  return (
    <div className='revolution_container min-h-[500px] px-5'>
      <div className='flex text-white py-20 items-start justify-evenly lg:flex-row flex-col gap-7'>
        <div className='w-full sm:w-fit'>
          <h1 className='sm:text-[60px] text-center sm:text-left'>Revolutionising</h1>
          <h1 className='sm:text-[60px] text-center sm:text-left'>Legal Research</h1>
          <h1 className='sm:text-[60px] text-center sm:text-left'>with AI</h1>
        </div>
        <div className='lg:max-w-[540px] w-full'>
          <p className='leading-[30px] text-[20px] sm:text-left text-center'>
            Legal GPT is an innovative platform designed to streamline the process of legal research and case study by
            harnessing the power of Generative AI and advanced logical approaches. Our platform is tailored to help
            users find legal precedents, judgments, and similar cases efficiently and effectively. This GenAI-based
            platform provides users with the ability to input legal cases, complete with details about the case in hand,
            to find similar legal precedents and judgments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Revolution
