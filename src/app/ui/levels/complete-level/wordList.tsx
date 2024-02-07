import { useCompleteLevel } from "./context";
import { WordButton } from "./wordButton";


export function WordsList() {
  const level = useCompleteLevel()
  const selected = level.selectedWords 
  const words = level.level.data.words

  const transformed = words.reduce<{render: React.ReactNode[],used:number}>((lastState,word) => {
    let used = false
    let toAdd 
    const spaceValue = selected[lastState.used]
    
    if (word.type === "space") {
      toAdd =   (
        <span className="text-nowrap text block w-fit relative border-b-2 text-transparent border-gray-300   select-none" >
          __________
          {spaceValue !== undefined && <WordButton
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white"
            onclick={() => level.removeWord(spaceValue)}
            disabled ={!level.playing}
          >
            {used = true}
            {spaceValue}
          </WordButton>
        }
        </span>
      )

    } else {
      toAdd = <span className="ml-[.3rem]" key={word.word}>{word.word}</span>;
    }
  return {
      render: [...lastState.render, toAdd],
      used: used ? lastState.used + 1 : lastState.used
    }
  }, {
    render: [],
    used: 0
  });

  return transformed.render
}