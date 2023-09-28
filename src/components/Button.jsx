import React from 'react'

const variants = {
    default: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
    alternative: " text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200"
}

const Button = ({variant = 'default'}) => {
  return (
    <button 
        // className='bg-black text-red-800 px-6 py-2 rounded-lg hover:bg-gray-500'
        className = {`text-sm px-5 py-2.5 mr-2 mb-2 font-medium focus:ring-4 focus:outline-none rounded-lg ${variants[variant]}`} 
    >
        Meow
    </button>
  )
}

export default Button
