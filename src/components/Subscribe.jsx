import {Form} from './Form.jsx';

const Subscribe = () => {
  return (
    <section className='bg-[#575989] text-white flex flex-col md:flex-row md:items-center md:justify-between mt-10 p-5 md:px-10 py-20 md:mt-0'>
        <div className='md:w-2/5'>
            <h3 className='text-xl text-center md:text-3xl md:text-left font-semibold'>Get early access today</h3>
            <p className='text-center md:text-left text-base my-3'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <Form classname='md:w-2/5 flex' direction="column" input="w-full p-3 border-[1px] border-solid border-blue-900 rounded-md outline-none text-black" button="bg-[#2F65F9] text-white font-semibold border-solid rounded-md w-full md:w-3/6 px-5 py-3 my-5 hover:bg-[#6B9BFF]"  placeholder="email@example.com" btnText="Get Started For Free"/>
    </section>
  )
}

export default Subscribe