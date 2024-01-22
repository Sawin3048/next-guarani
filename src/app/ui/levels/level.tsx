"use client";

import Image from "next/image";
import { ButtonLink } from "../buttond";
import React, { useState } from "react";
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
}

export default function Level({ toRender }: Params) {
  const { imageSrc, words, options, correctOption } = toRender.data;
  

  const [selected, setSelected] = useState<string[]>([]);
  const setSelectedState = (option: string) => {
    setSelected(prev => [option])
  };
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
      <div>
        <Button
          active={Boolean(selected[0])}
          onclick={() => {
            console.log(selected[0], correctOption)
            alert(selected[0] === correctOption);
          }}
        >
          Comprobar
        </Button>
      </div>
    </div>
  );
}
