import React, { Children } from 'react'

function Button({
    children,
    type = "button",
    bgColor = 'bg-blue-200',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-full ${bgColor} ${textColor} 
        ${className}`} {...props}>{Children}</button >
  )
}

export default Button