import { capitalize } from "@/app/utils/capitalize"
import Correct from "./correctSimbol"

interface Params{
  isWell: boolean
  selected: string
  correctOption: string
}

function Stat({isWell,selected,correctOption}:Params) {
  return (
    <li>
          <Correct isWell={isWell}  />
          <div className="flex justify-between w-full items-center">
            <p className="ml-5 w-1/2 pl-2 sm:text-lg">{capitalize(selected)}</p>
            <p className="w-1/2 border-l-2 sm:pl-9 pl-3 sm:text-lg">{capitalize(correctOption)}</p>
          </div>
    </li>
  )
}

export default Stat