import React from 'react'

function Button({
    children,
    type ='button',
    bgColor = 'bg-indigo-600',
    textColor = 'text-white',
    className ='',
    ...props
}
) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg transition-colors duration-200 hover:brightness-110 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button
