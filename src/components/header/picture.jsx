import personalImage from '../../images/alanescobedo.jpg'

const Picture = ({ mb, w, h }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-indigo-600 rounded-3xl ">
        <img
          className={`mb-${mb} w-${w} h-${h} rounded-3xl shadow-lg border p-1 rotate-[10deg]`}
          src={personalImage}
          alt="Alan Escobedo Picture"
        />
      </div>
    </div>
  )
}
export default Picture
