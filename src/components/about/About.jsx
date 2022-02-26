import personalImage from '../../images/aboutmepicture.jpg'
import { FaAward } from 'react-icons/fa'
import { BsFolder2Open } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineTeam } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about" className="w-full flex justify-center">
      <div className="p-4 max-w-3xl grid gap-4 xs:grid-cols-2 justify-center items-center lg:grid-cols-4 lg:max-w-5xl lg:gap-10">
        <h2 className="text-3xl h-26 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2">
          Más
        </h2>
        <h1 className="text-4xl h-26 font-bold m-1 text-blue-700 flex justify-center xs:justify-start lg:col-span-2">
          Sobre mi
        </h1>

        <div className="h-56 w-56 flex items-center justify-center bg-indigo-600 rounded-3xl  xs:col-span-2 xs:row-span-2 xs:w-full xs:h-full">
          <img
            className="h-56 w-56 rounded-3xl shadow-lg border -rotate-[12deg] lg:w-5/6 lg:h-5/6"
            src={personalImage}
            alt="Alan Escobedo Picture"
          />
        </div>
        <div className="h-56 w-56 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center">
          <h5 className="mb-4 text-5xl font-bold tracking-tight dark:text-white">
            <FaAward />
          </h5>
          <p className="font-normal text-gray-900 dark:text-gray-400 mb-4">
            1 Año de experiencia desarrollando paginas web con Javascript
          </p>
        </div>
        <div className="h-56 w-56 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center">
          <h5 className="mb-4 text-5xl font-bold tracking-tight dark:text-white">
            <BsFolder2Open />
          </h5>
          <p className="font-normal text-gray-900 dark:text-gray-400 mb-4">
            10+ Proyectos terminados usando las tecnologias mas modernas y
            aplicando buenas practicas
          </p>
        </div>
        <div className="h-56 w-56 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center">
          <h5 className="mb-4 text-5xl font-bold tracking-tight dark:text-white">
            <GiProgression />
          </h5>
          <p className="font-normal text-gray-900 dark:text-gray-400 mb-4">
            En continuo aprendizaje y desarrollo de nuevas tecnologias,
            metodologias y herramientas
          </p>
        </div>
        <div className="h-56 w-56 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center">
          <h5 className="mb-4 text-5xl font-bold tracking-tight dark:text-white">
            <AiOutlineTeam />
          </h5>
          <p className="font-normal text-gray-900 dark:text-gray-400 mb-4">
            Trabajo en equipo, escucha activa y comunicación clara
          </p>
        </div>
      </div>

    </section>
  )
}
export default About
