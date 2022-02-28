import InfoCard from './InfoCard'

const Contact = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      id="contact"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2">
          Vamos a trabajar juntos!
        </h2>
        <h1 className="text-5xl h-26 font-bold m-1 text-cyan-400 flex justify-center xs:justify-start lg:col-span-2">
          Contactame
        </h1>
      </div>
      <div className="w-5/6 flex flex-col items-center justify-center">
        <InfoCard icon="whatsapp" description="+52 465-118-5454" />
        <InfoCard icon="mail" description="alanaguinaga43@gmail.com" />
      </div>

      <div className="w-full flex flex-col p-10">
        <label
          htmlFor="email-adress-icon"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          Tu correo Electronico
        </label>
        <div className="relative mt-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-12 h-12 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
