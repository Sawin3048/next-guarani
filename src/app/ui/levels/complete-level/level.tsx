"use client";

import Image from "next/image";
import { ButtonLink } from "../../buttond";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Button } from "../../button";
import { Words } from "../types";
import { useChapter } from "@/app/level/[levelID]/context/chapter-handler-context";
import { create } from "zustand";

interface P {
  words: Words[];
  selected?: React.ReactNode;
  rm: (id:string)=>void
  }

function WordsList({ words, selected,rm }: P) {
  return words.map((word) => {
    if (word.type === "space") 
      return (
      <span className="w-[200ch] border-b-2 border-gray-300 h-7 text-white select-none" >
        __________<Button active > Palabra</Button>
      </span>
      );
    return <span className="ml-[.3rem]" key={word.word}>{word.word}</span>;
  });
}

// Store types
export interface State {
  playing: boolean,
  selectedWords: string[]
  isCorrect: boolean | null
}

export interface Actions {
  setIsCorrect: (correct: boolean) => void
  addWord: (word: string) => void
  removeWord: (word:string) => void
}
// Store
export const useCompleteLevelStore = create<State & Actions>((set) =>
({
  playing: true,
  selectedWords: [],
  isCorrect: null,

  setIsCorrect: (correct) => set(state => {
    
    return {
      isCorrect: correct
    }
  }),
  addWord: (word) => set(state => {
    
    return {
      selectedWords: [...state.selectedWords, word]
    }
  }),

  removeWord: (word) => set(state => {
    
    return {
      selectedWords : state.selectedWords.filter(w => w !== word)
    }
  })

}))

// Context
const placeholder = { } as State & Actions
const CompleteLevelContext = createContext<State & Actions>(placeholder)

export function useCompleteLevel() {
  return useContext(CompleteLevelContext)
}

export function CompleteLevelProvider({ children }: { children: ReactNode }) {
  const store = useCompleteLevelStore()
  
  return (<CompleteLevelContext.Provider value={store}>
    {children}
  </CompleteLevelContext.Provider>)
}

// Level
export default function Level() {
  const store = useChapter()
  const levelStore = useCompleteLevel()

  const { imageSrc, words, options, correctOption } = store.current.data

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [selected, setSelected] = useState<string[]>([]);

  const rm = (id:string) => setSelected(prev=> prev.filter(previd => previd !== id))
  
  const setSelectedState = (option: string) => {
     setSelected(prev => [...prev,option])
  };

  useEffect(() => {
    setIsCorrect(null)
    setSelected([])
  }, [store.current.id])

  return (
    <div className="bg-white text-2xl font-light p-6">
      <div className="md:flex">
        <div className="grid content-center justify-center">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt=""
          className="select-none"
          />
        </div>
        <div >
          <p className="text">

          <WordsList words={words} selected={levelStore.selectedWords} rm={rm} />
          </p>
          
        </div>
      </div>
      <div className="mt-10 flex gap-2 flex-wrap justify-center">
            {options.map((option) => {
              return (
                <ButtonLink
                  callback={() => levelStore.addWord(option)}
                  key={option}
                  color="gray"
                  className="select-none hover:bg-inherit"
                >
                  {option}
                </ButtonLink>
              );
            })}
          </div>
      <hr className="border-b-2"/>
      <div className="flex justify-between p-6">
        {
          isCorrect !== null && <LevelMessage
            complete={isCorrect}
          />
        }
        <Button
          active={Boolean(levelStore.selectedWords[0])}
          onclick={() => {
            if (levelStore.isCorrect === null) {
              const correct = levelStore.selectedWords[0] === correctOption[0]
              setIsCorrect(correct)
              store.updateUI(correct)
              console.log(correct,selected,correctOption)

            }
            else {
            
            }
          }}
        >
          {(isCorrect === null) ? "Comprobar" : "Continuar"}
        </Button>
      </div>
      <div>
        
        </div>
    </div>
  );
}

interface Pa {
  complete: boolean
}

function LevelMessage({ complete }: Pa) {
  const store = useChapter()
  const level = store.current
  
  const palabras = level.data.words.map(w => {
    if (w.type === "word") return w.word
    if(w.type === "space") return null
  })


  return <div>
  {complete ? <>Bien</> : <>
    <h4 className="">Solución Correcta</h4>
    <p>{palabras.map(p => p ? p : level.data.correctOption).join(" ")}</p>
    </>
    }
  
    <Button active onclick={complete ? store.complete : store.fail}>Continuar</Button>
  </div>
}