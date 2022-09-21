import logo from '../images/logo.svg';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center p-5 md:px-10'>
        <img className='w-14 h-6 md:w-28 md:h-10' src={logo} alt="logo" />
        <ul className='flex'>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Sign In</a></li>
        </ul>
    </nav>
  )
}

export default Nav