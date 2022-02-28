import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div className="fixed bottom-0 mb-5 w-full flex justify-center z-10">
      <nav className="h-14 w-min  bg-gray-700 rounded-3xl flex items-center">
        <NavLink refTo="home" iconName="AiOutlineHome" />{' '}
        <NavLink refTo="about" iconName="AiOutlineUser" />{' '}
        <NavLink refTo="experience" iconName="AiOutlineBook" />{' '}
        <NavLink refTo="contact" iconName="BiMessageSquareDetail" />{' '}
      </nav>
    </div>
  )
}
export default Navbar
