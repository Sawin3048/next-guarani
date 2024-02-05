"use client";

import Image from "next/image";
import { useCompleteLevel } from '@/app/ui/levels/complete-level/context'
import clsx from "clsx";

interface Par {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  disabled?: boolean
}

export function WordButton({ children, className, onclick, disabled }: Par){
  return (
    <button
      disabled={!!disabled}
      className={clsx(className,
        `py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 shadow  text-nowrap border-neutral-400`, {
          "text-neutral-400": disabled,
          "active:scale-105": !disabled,
          "text-neutral-800": !disabled
        }
        
      )}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

function WordsList() {
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



// Level
export default function Level() {
  
  const levelStore = useCompleteLevel()

  const { imageSrc, options } = levelStore.level.data

  return (<>
    <div className="text-2xl font-light ">
      <div className="md:flex md:items-center md:gap-4">
        <div className="grid content-center justify-center ">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt=""
          className="select-none"
          />
        </div>
        <div >
          

          <p className="flex flex-wrap leading-loose text-balance w-full text-center">
          <WordsList />
          </p>
          
          
        </div>
      </div>
      <div className="mt-10 flex gap-2 flex-wrap justify-center max-sh-32">
        {options.map((option) => {
              if(levelStore.selectedWords.includes(option)) return 
              return (
                <WordButton
                  onclick={() => levelStore.addWord(option)}
                  disabled= {!levelStore.canAddWord || !levelStore.playing}
                  key={option}
                >
                  {option}
                </WordButton>
              );
            })}
          </div>
    </div>
    </>
  );
}

