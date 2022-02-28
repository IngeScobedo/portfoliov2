import ProyectCard from './ProyectCard'
import proyectImage from '../../images/social-dashboard-project.jpg'
import apiGif from '../../images/api.gif'

const Portfolio = () => {
  return (
    <section id="portfolio" className="w/full flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2">
          Mis mas recientes
        </h2>
        <h1 className="text-5xl h-26 font-bold m-1 text-emerald-400 flex justify-center xs:justify-start lg:col-span-2">
          Proyectos
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <ProyectCard
          image={proyectImage}
          name="Social Media Dashboard"
          description="Desafio de la plataforma FrontendMentor"
        >
          <span className="bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
            HTML
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            CSS
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            Javascript
          </span>
        </ProyectCard>

        <ProyectCard
          image={apiGif}
          name="API Rest"
          description="Una API Rest para una aplicación de notas, autenticación y autorización y manejo de datos"
        >
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            NodeJS
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            MongoDB
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            JWT
          </span>
          <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
            Express.js
          </span>
        </ProyectCard>
        <ProyectCard
          image={proyectImage}
          name="Social Media Dashboard"
          description="Desafio de la plataforma FrontendMentor"
        />
        <ProyectCard
          image={proyectImage}
          name="Social Media Dashboard"
          description="Desafio de la plataforma FrontendMentor"
        />
      </div>
    </section>
  )
}

export default Portfolio
