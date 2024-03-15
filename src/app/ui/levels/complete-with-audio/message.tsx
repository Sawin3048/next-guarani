import clsx from "clsx";
import { useCompleteWithAudio } from "./context";
import { useChapter } from "@/app/level/[levelID]/context/chapter-handler-context";
import { MakeLog } from "./makeLog";

interface Params {
  active: boolean
  onclick?: () => void
  children: React.ReactNode
  className?: string
  color?: 'red' | 'green'
}


function Button({active, onclick, children, className, color}:Params) {
  return (
    <button className={clsx(`py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 shadow transform  active:scale-105 transition-colors duration-500`, {
      "text-white": active,
      "border-emerald-700": active ,
      "bg-emerald-700": active ,
      "hover:bg-emerald-700": active ,
      "border-red-700": active && color === 'red',
      "bg-red-700": active && color === 'red',
      "hover:bg-red-700": active && color === 'red',
      "border-neutral-400": !active,
      "text-neutral-400": !active,
      "active:transform-none": !active,
    },className) } onClick={onclick} disabled={!active}>
      {children}
    </button>
  );
}

interface Pa {
  complete?: boolean | null
  title?: string
  subTitle?: string
}

export function LevelMessage({ }: Pa) {
  const chapter = useChapter()
  const levelStore = useCompleteWithAudio()
  const complete = levelStore.isCorrect
  const level = levelStore.level
  
  const palabras = level.data.words.map(w => {
    if (w.type === "word") return w.word
    if(w.type === "space") return null
  })

  let counter = 0
  return <div className={clsx("flex flex-row-reverse justify-between p-6 items-center", {
    "bg-red-300": levelStore.isCorrect === false,
    "bg-emerald-500": levelStore.isCorrect === true
  })}>
    <div>
      <Button
            color={levelStore.isCorrect !== null ? levelStore.isCorrect ? "green" : "red": undefined}
            active={Boolean(levelStore.selectedWords[0])}
            onclick={() => {
              if (levelStore.isCorrect === null) {
                const selected = levelStore.selectedWords
                const correctOption = levelStore.level.data.correctOption
                const correct = JSON.stringify(selected) === JSON.stringify(correctOption)
                levelStore.setIsCorrect(correct)
                chapter.updateUI(correct)

                if (correct) {
                  chapter.successLevelAudio.play()
                  MakeLog(true)
                }
                else {
                  MakeLog(false)
                  chapter.failLevelAudio.play()
                }
              }
              else {
                if (levelStore.isCorrect) chapter.complete()
                else  chapter.fail() 
                levelStore.reset()
              }
            }}
            >
            {(levelStore.isCorrect === null) ? "Comprobar" : "Continuar"}
      </Button>
    </div>

    {complete === null ? <></>
      :
      complete
        ? <h4 className="text-white text-xl font-bold">¡Muy Bien!</h4>
        : <div>
            <h4 className="text-red-600 text-xl font-extrabold">Fallaste:</h4>
            <p className="text-red-600 font-semibold">{palabras.map(
              p => {
                if (p) return p
                counter ++
                return level.data.correctOption[(counter - 1)]
              }).join(" ")}
            </p>
          </div>
    } 
  
  </div>
}