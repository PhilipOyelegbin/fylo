import React from 'react'
import quotes from '../images/icon-quotes.svg'

export const Card = ({text, avatar, title, subtitle}) => {
  return (
    <div className="w-[90%] md:w-[60%] bg-white p-5 my-5 mx-auto md:mx-0 border-solid rounded-lg">
        <img src={quotes} alt="icon" />
        <p className='mt-3 text-xs'>{text ? text : ""}</p>
        <figure className='flex items-center my-3'>
            <img className='w-10 h-10 rounded-full mr-2' src={avatar ? avatar : ""} alt="avatar" />
            <figcaption><h3 className='text-xs font-bold'>{title ? title : ""}</h3><small className='text-[10px]'>{subtitle ? subtitle : ""}</small></figcaption>
        </figure>
    </div>
  )
}
