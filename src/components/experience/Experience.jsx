import CardXp from './CardXp'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <section id="experience">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2">
          Que habilidades tengo?
        </h2>
        <h1 className="text-5xl h-26 font-bold m-1 text-rose-400 flex justify-center xs:justify-start lg:col-span-2">
          Mi experiencia...
        </h1>
      </div>
      <div className="w-full px-16 flex items-center justify-center flex-col lg:flex-row">
        <CardXp position="Frontend">
          <ExperienceItem technology="HTML5" level="Avanzado" />
          <ExperienceItem technology="CSS3" level="Avanzado" />
          <ExperienceItem technology="JavaScript" level="Intermedio" />
          <ExperienceItem technology="React" level="Basico" />
          <ExperienceItem technology="Tailwind" level="Intermedio" />
        </CardXp>
        <CardXp position="Backend">
          <ExperienceItem technology="Node.js" level="Intermedio" />
          <ExperienceItem technology="MongoDB" level="Basico" />
          <ExperienceItem technology="Github" level="Intermedio" />
          <ExperienceItem technology="Github Actions" level="Basico" />
          <ExperienceItem technology="JWT" level="Intermedio" />
          <ExperienceItem technology="Express.js" level="Intermedio" />
        </CardXp>
      </div>
    </section>
  )
}
export default Experience
