import React from 'react'
import Wallet from "./Web3/wallet";

const Header = () => {
  return (
    <div>
        
        <div className='flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200   p-3 justify-between items-center'>

            <div className='text 3xl font-bold text-white'>
                HOLA
            </div>
            
            <div className='flex space-x-4'>
                <a href="" className='text-white font-semibold py-2 hover:text-blue-400'>Home</a>
                <Wallet />
            </div>

        </div>
        
    </div>
  )
}

export default Header