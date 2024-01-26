"use client";

import Image from "next/image";
import { ButtonLink } from "../../buttond";
import React, { useEffect, useState } from "react";
import { Button } from "../../button";
import { Words } from "../types";
import { useChapter } from "@/app/level/[levelID]/context/chapter-handler-context";
import { useCompleteLevel } from '@/app/ui/levels/complete-level/context'


interface P {
  words: Words[];
  selected?: React.ReactNode;
  rm?: (id:string)=>void
  }

function WordsList({ words, selected, rm }: P) {
  
  return words.reduce((lastWord,currentWord) => {
    console.log({lastWord, currentWord})
    return []
    
    // if (word.type === "space")
    //   return (
    //   <span className="w-[200ch] border-b-2 border-gray-300 h-7 text-white select-none" >
    //     __________<Button active > Palabra</Button>
    //   </span>
    //   );
    // return <span className="ml-[.3rem]" key={word.word}>{word.word}</span>;
  },[]);
}



// Level
export default function Level() {
  const store = useChapter()
  const levelStore = useCompleteLevel()

  const { imageSrc, words, options } = store.current.data

  return (<>
    <div className="bg-white text-2xl font-light ">
      <div className="md:flex md:items-center">
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
          <p className="text">

          <WordsList words={words} selected={levelStore.selectedWords} />
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
    </div>
    </>
  );
}

