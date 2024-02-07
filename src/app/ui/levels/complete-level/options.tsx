import { useCompleteLevel } from './context'
import { WordButton } from './wordButton'


function Options() {
  const levelStore = useCompleteLevel()

  const onclickButton = (option:string) => {
    levelStore.addWord(option)
  }

  const { options } = levelStore.level.data

  return options.map((option) => {
    if (levelStore.selectedWords.includes(option)) return 
    
    const disabled = !levelStore.canAddWord || !levelStore.playing

    return (
      <WordButton
        onclick={() => onclickButton(option)}
        disabled= {disabled}
        key={option}
      >
        {option}
      </WordButton>
    );
  })
}

export default Options