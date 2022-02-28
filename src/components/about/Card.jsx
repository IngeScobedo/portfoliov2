import { BsFolder2Open } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineTeam } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'

const Card = ({ description, iconType }) => {
  return (
    <div className="h-56 w-56 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center">
      <h5 className="mb-4 text-5xl font-bold tracking-tight dark:text-white">
        {iconType === 'FaAward'
          ? (
          <FaAward />
            )
          : iconType === 'BsFolder2Open'
            ? (
          <BsFolder2Open />
              )
            : iconType === 'GiProgression'
              ? (
          <GiProgression />
                )
              : iconType === 'AiOutlineTeam'
                ? (
          <AiOutlineTeam />
                  )
                : null}
      </h5>
      <p className="font-normal text-gray-900 dark:text-gray-400 mb-4">
        {description}
      </p>
    </div>
  )
}
export default Card
