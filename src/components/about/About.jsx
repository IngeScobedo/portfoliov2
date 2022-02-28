import Picture from '../header/Picture'
import Card from './Card'

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

        <Picture
          className="xs:col-span-2 xs:row-span-2 xs:w-full xs:h-full"
          mb={0}
          w={56}
          h={56}
        />

        <Card
          description="1 Año de experiencia desarrollando paginas web con Javascript"
          iconType="FaAward"
        />
        <Card
          description="10+ Proyectos terminados usando las tecnologias mas modernas y
            aplicando buenas practicas"
          iconType="BsFolder2Open"
        />
        <Card
          description="En continuo aprendizaje y desarrollo de nuevas tecnologias,
          metodologias y herramientas"
          iconType="GiProgression"
        />
        <Card
          description="Trabajo en equipo, escucha activa y comunicación clara"
          iconType="AiOutlineTeam"
        />
      </div>
    </section>
  )
}
export default About
