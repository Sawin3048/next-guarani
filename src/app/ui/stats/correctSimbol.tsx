import CheckBold from "@/app/ui/svg/checkBold"
import CloseBold from "@/app/ui/svg/closeBold"

function Correct({ isWell }: { isWell: boolean }) {
  if (isWell) return (
    <span className="border-4 p-1 block rounded-full w-fit border-emerald-500 text-emerald-500">
      <CheckBold className="w-3 h-3 sm:w-4 sm:h-4"/>
    </span>)
  
  return (
    <span className="border-4 p-1 block rounded-full w-fit border-red-500">
      <CloseBold className="w-3 h-3 sm:w-6 sm:h-6"/>
    </span>)
}

export default Correct
