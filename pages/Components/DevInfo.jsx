import React from 'react'

const Devinfo = () => {
  return (
    <div className='flex align-center justify-center'>
       
        <div className='h-[350px] w-[350px] rounded-full bg-black flex items-center justify-center flex-col'>
        <h1 className='text-center font-bold text-5xl pb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>
        My Details
        </h1>
            <div>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl'>Name: Billyjitsu</h1>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl'>Discord: Billyjitsu</h1>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-2xl'>Twitter: wc49358</h1>
            </div>

        </div>
    </div>
  )
}

export default Devinfo