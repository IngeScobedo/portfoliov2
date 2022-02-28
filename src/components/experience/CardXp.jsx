
const CardXp = ({ children, position }) => {
  return (
    <div className="w-5/6 bg-indigo-900 flex flex-col items-center rounded-lg p-6 m-4 ">
      <h1 className="text-2xl text-gray-300">{position}</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:grid-cols-3">
        {children}
      </div>
    </div>
  )
}
export default CardXp
