import Hearts from "@/app/ui/levels/heart"
import ProgressBar from "@/app/ui/levels/progress-bar"
import Close from "@/app/ui/svg/close"
import Link from "next/link"
import { useChapter } from "../context/chapter-handler-context"


/**
 * 
 * Este componente debe ser envolvido en un "ChapterProvider"
 */
function LevelNav() {
  const store = useChapter()
  
  return (
    <nav className=" w-full border rounded-t-none md:rounded-t-2xl flex p-3 gap-4 justify-between rounded-2xl items-center bg-white">
        <Link className="text-gray-400" href={"/level"}>
          <Close />
        </Link>
      <ProgressBar percentage={`${100 / store.amount * store.progressUI}%`} />
      <Hearts num={store.heartUI} />
    </nav>
  ) 
}

export default LevelNav