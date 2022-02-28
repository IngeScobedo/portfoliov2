import { IoLogoWhatsapp } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'

const InfoCard = ({ description, icon }) => {
  return (
    <div className="w-11/12 bg-gray-700 rounded-xl flex flex-col items-center p-3 my-3">
      <div className="w-full h-12 flex justify-center items-center">
        {icon === 'whatsapp'
          ? (
          <IoLogoWhatsapp size="large" />
            )
          : (
          <AiOutlineMail size="large" />
            )}
      </div>
      <h1>{description}</h1>
    </div>
  )
}

export default InfoCard
