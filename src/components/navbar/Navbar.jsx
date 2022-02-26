import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="fixed bottom-0 mb-5 w-full flex justify-center z-10">
      <nav className='h-14 w-min  bg-gray-700 rounded-3xl flex items-center' >
      <a
       href="#home"
        className='w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 active:bg-gray-900 focus:outline-none  hover:text-white focus-within:shadow-lg'
       >
        <AiOutlineHome />
      </a> <a
       href="#about"
        className='w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 hover:text-white'
       >
        <AiOutlineUser />
      </a> <a
       href="#experience"
        className='w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 hover:text-white'
       >
        <AiOutlineBook />
      </a> <a
       href="#services"
        className='w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 hover:text-white'
       >
        <RiServiceLine />
      </a> <a
       href="#contact"
        className='w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 hover:text-white'
       >
        <BiMessageSquareDetail />
      </a>
    </nav>
    </div>
  )
}
export default Navbar
