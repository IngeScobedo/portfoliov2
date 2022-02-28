// import personalImage from '../../images/alanescobedo.jpg'
const imgUrl = new URL('../../images/alanescobedo.jpg', import.meta.url).href
document.getElementById('personal-image').src = imgUrl
const Picture = ({ mb, w, h }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-indigo-600 rounded-3xl ">
        <img
          id="personal-image"
          className={`mb-${mb} w-${w} h-${h} rounded-3xl shadow-lg border p-1 rotate-[10deg]`}
          src={imgUrl}
          alt="Alan Escobedo Picture"
        />
      </div>
    </div>
  )
}
export default Picture
