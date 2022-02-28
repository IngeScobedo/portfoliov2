const NavFooter = ({ reference, name }) => {
  return (
    <li className="w-full text-center m-2">
      <a
        className="w-full text-center text-gray-300 font-bold text-xl"
        href={`#${reference}`}
      >
        {name}
      </a>
    </li>
  )
}
export default NavFooter
