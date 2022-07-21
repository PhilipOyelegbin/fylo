import React from 'react'
import illustration_2 from '../images/illustration-2.svg'
import arrow from '../images/icon-arrow.svg'
import {Card} from './Card.jsx'
import avatar from '../images/avatar-testimonial.jpg'

const Team = () => {
  return (
    <section className='flex flex-col justify-center md:flex-row md:justify-between items-center p-5 md:px-10 bg-[#F9F8FE]'>
        <img className='md:hidden' src={illustration_2} alt="image" />

        <div className='md:w-1/2'>
            <h2 className='text-lg text-center text-[#000035] md:text-2xl md:text-left font-bold my-5'>Stay productive, wherever you are</h2>

            <p className='my-5 md:text-xs md:w-4/5'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className='my-5 md:text-xs md:w-4/5'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

            <a className='flex items-center text-sm text-[#389E88] hover:text-[#81D5C5] border-b-[1px] border-[#389E88] hover:border-[#81D5C5] pb-1 w-fit mx-auto md:mx-0' href="#">
                See how Fylo works 
                <img className='ml-2' src={arrow} alt="icon" />
            </a>

            <Card text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine." avatar={avatar} title="Kyle Burton" subtitle="Founder & CEO, Huddle"/>
        </div>

        <img className='hidden md:w-1/2 md:block' src={illustration_2} alt="image" />
    </section>
  )
}

export default Team