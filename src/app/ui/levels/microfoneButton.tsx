import clsx from "clsx"
import { ButtonLink } from "../buttond"
import MicIcon from "../svg/mic"

interface Params {
  record: boolean
  callback: () => void
  disable?: boolean
}

function MicrofoneButton({record,callback, disable}: Params) {

  return (
    <ButtonLink className={clsx("hover:bg-inherit", {
      "border-red-500": record
    })} callback={callback}
    disable={disable}
    >
      <MicIcon className={clsx("w-16 h-16", {
        "text-gray-500": !record,
        "text-red-500": record
      })} />
</ButtonLink>
  )
}

export default MicrofoneButton