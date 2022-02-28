const ProyectCard = ({ children, image, name, description, repo }) => {
  return (
    <div className="w-full flex justify-center min-h-48 " rel="noreferrer">
      <a
        href={`${repo}`}
        target="_blank"
        className="rounded-2xl bg-slate-400 max-w-xs relative"
        rel="noreferrer"
      >
        <img src={image} className="rounded-t-2xl w-full h-48" />
        <div
          id="proyect-card"
          className="text-transparent w-full h-48 p-4 absolute top-0 hover:block hover:bg-gray-500 hover:bg-opacity-80 flex justify-center items-center hover:text-white hover:text-center hover:px-32 hover:py-20 rounded-t-2xl"
        >
          <p
            className="h-18 rounded-lg border border-blue-400 bg-transparent text-center hover:text-blue-500 cursor-pointer hover:"
            rel="noreferrer"
          >
            Ver demo
          </p>
        </div>
        <div className="min-h-36 p-4">
          <h1 className="m-0 pb-2 text-gray-900 font-bold text-2xl">{name}</h1>
          <p className="text-lg text-gray-600 font-bold">{description}</p>
        </div>
        <div className="p-4 flex flex-wrap gap-1">{children}</div>
      </a>
    </div>
  )
}
export default ProyectCard
