import React from 'react'
import {Form} from './Form.jsx'

const Subscribe = () => {
  return (
    <section className='bg-indigo-400 text-white flex flex-col md:flex-row md:items-center md:justify-between p-5 md:px-10 py-10'>
        <div className='md:w-2/5'>
            <h3 className='text-lg text-center md:text-left font-bold'>Get early access today</h3>
            <p className='text-center md:text-left text-xs my-3'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <Form classname='md:w-2/5 flex' direction="column" input="w-full p-3 border-[1px] border-solid border-blue-900 rounded-md outline-none text-black" button="bg-blue-500 text-white font-bold border-solid rounded-md w-full md:w-3/5 px-5 py-3 my-5 hover:bg-blue-300"  placeholder="email@example.com" btnText="Get Started For Free"/>
    </section>
  )
}

export default Subscribe