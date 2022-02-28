import { BsFillPatchCheckFill } from 'react-icons/bs'

const ExperienceItem = ({ technology, level }) => {
  return (
    <div className="max-w-22 flex gap-4 p-2">
      <BsFillPatchCheckFill className="m-1" />
      <div>
        <h3 className="font-bold">{technology}</h3>
        <p className="text-sm text-gray-400">{level}</p>
      </div>
    </div>
  )
}

export default ExperienceItem
