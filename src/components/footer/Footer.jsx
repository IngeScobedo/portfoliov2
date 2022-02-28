import NavFooter from './NavFooter'

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col items-center bg-indigo-700 mt-14 h-96 xs:h-72 sm:h-64"
    >
      <h1 className="text-gray-300 font-bold">Alan Escobedo</h1>
      <ol className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <NavFooter name="Inicio" reference="home" />
        <NavFooter name="Sobre mi" reference="about" />
        <NavFooter name="Experiencia" reference="experience" />
        <NavFooter name="Proyectos" reference="portfolio" />
        <NavFooter name="Contacto" reference="contact" />
      </ol>
    </footer>
  )
}
export default Footer
