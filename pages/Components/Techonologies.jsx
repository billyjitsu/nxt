import React from 'react'
import {FaReact, FaJava, FaNodeJs, FaEthereum } from 'react-icons/fa'

const Technologies = () => {
  return (
    <div className='mt-10 bg bg-purple-50 '>
      <h1 className='text-center font-bold text-5xl py-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>
        Technologies
        </h1>
        <div className="grid grid-cols-4 my-20 sm:grid-cols-1 space-y-4 pb-10">
          <div className='text-center'>
            <FaReact className='w-full' size={150} />
          </div>
          <div className='text-center'>
            <FaJava className='w-full' size={150}/>
          </div>
          <div className='text-center'>
            <FaNodeJs className='w-full' size={150}/>
          </div>
          <div className='text-center'>
            <FaEthereum className='w-full' size={150}/>
          </div>

        </div>
    </div>
  )
}

export default Technologies