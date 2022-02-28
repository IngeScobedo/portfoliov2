import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const NavLink = ({ refTo, iconName }) => {
  return (
    <a
      href={`#${refTo}`}
      className="w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 active:bg-gray-900 focus:outline-none  hover:text-white focus-within:shadow-lg"
    >
      {iconName === 'AiOutlineHome'
        ? (
        <AiOutlineHome />
          )
        : iconName === 'AiOutlineUser'
          ? (
        <AiOutlineUser />
            )
          : iconName === 'AiOutlineBook'
            ? (
        <AiOutlineBook />
              )
            : iconName === 'RiServiceLine'
              ? (
        <RiServiceLine />
                )
              : iconName === 'BiMessageSquareDetail'
                ? (
        <BiMessageSquareDetail />
                  )
                : null}
    </a>
  )
}
export default NavLink
