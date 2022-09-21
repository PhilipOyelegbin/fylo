import illustration_1 from '../images/illustration-1.svg';
import {Form} from '../components/Form.jsx';

const Hero = () => {
  return (
    <header className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center p-5 md:px-10 md:mb-20'>
        <div className='md:w-1/2'>
            <h2 className='text-xl text-[#000035] md:w-11/12 md:text-4xl text-center md:text-left font-semibold my-5'>All your files in one secure location, accessible anywhere.</h2>

            <p className='text-sm text-center md:w-11/12 md:text-xl md:text-left my-5'>Fylo stores your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family, and co-workers.</p>

            <Form classname='md:w-4/5 md:flex' input="w-full md:w-3/5 p-3 border-[1px] border-solid border-blue-900 rounded-md outline-none text-black" button="bg-[#2F65F9] hover:bg-[#6B9BFF] text-white font-bold border-solid rounded-md w-full md:w-2/5 px-5 py-3 my-5 md:my-0 md:ml-2" placeholder="Enter your email..." btnText="Get Started"/>
        </div>

        <img className='md:w-1/2' src={illustration_1} alt="image" />
    </header>
  )
}

export default Hero