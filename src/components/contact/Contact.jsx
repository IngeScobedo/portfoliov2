import FormContact from './FormContact'
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
      <div className="w-5/6 flex flex-col items-center justify-center sm:flex-row sm:gap-4">
        <InfoCard icon="whatsapp" description="+52 465-118-5454" />
        <InfoCard icon="mail" description="alanaguinaga43@gmail.com" />
      </div>
      <FormContact />
    </section>
  )
}

export default Contact
