"use client";

import Image from "next/image";
import { ButtonLink } from "../buttond";
import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { ILevel, Words } from "./types";

interface P {
  words: Words[];
  selected?: React.ReactNode;
  }

function WordsList({ words, selected, }: P) {
  return words.map((word) => {
    if (word.type === "space") 
    return (
      <span className="w-[200ch] border-b-2 border-gray-300 h-7 text-white select-none" >
        __________
      </span>
      );
    return <span key={word.word}>{word.word}</span>;
  });
}


interface Params {
  toRender: ILevel;
  onFail: () => void,
  onComplete: () => void
  avance: ()=> void
}

export default function Level({ toRender,onComplete,onFail,avance }: Params) {
  const { imageSrc, words, options, correctOption } = toRender.data;
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [selected, setSelected] = useState<string[]>([]);
  
    const setSelectedState = (option: string) => {
      setSelected(prev => [option])
    };

  useEffect(() => {
    setIsCorrect(null)
    setSelected([])
  }, [toRender.id])

  return (
    <div className="bg-white text-2xl">
      <div className="flex">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt=""
          className="select-none"
        />
        <div className="w-full">
          <WordsList words={words} selected={selected} />
          <div className="mt-10 flex gap-4">
            {options.map((option) => {
              return (
                <ButtonLink
                  callback={() => setSelectedState(option)}
                  key={option}
                  color="gray"
                  className="select-none hover:bg-inherit"
                >
                  {option}
                </ButtonLink>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="border-b-2"/>
      <div className="flex justify-between p-6">
        {
          isCorrect !== null && <LevelMessage
            level={toRender}
            complete={isCorrect}
            si={onComplete}
            no={onFail}
          />
        }
        <Button
          active={Boolean(selected[0])}
          onclick={() => {
            if (isCorrect === null) {
              const correct = selected[0] === correctOption
              setIsCorrect(correct)
              if (correct) avance()
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
  level: ILevel
  complete: boolean
  si: () => void
  no:()=>void
}

function LevelMessage({ level,complete,no,si }: Pa) {
  
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
  
    <Button active onclick={complete ? si : no}>Continuar</Button>
  </div>
}