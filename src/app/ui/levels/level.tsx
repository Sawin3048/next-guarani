"use client";

import Image from "next/image";
import { ButtonLink } from "../buttond";
import React, { useState } from "react";
import { Button } from "../button";

const levelTypes = {
  complete: "complete",
  selectPair: "selectPair",
};

type LevelType = (typeof levelTypes)[keyof typeof levelTypes];

type Words = {
  type:"space"
} | {
  type: "word",
  word: string
}

export interface ILevel {
  type: LevelType;
  data: {
    imageSrc: string;
    words: Words[];
    options: string[];
    correctOption: string;
  };
}

interface Params {
  toRender: ILevel;
}

function WordsList({
  words,
  selected,
}: {
  words: Words[];
  selected?: React.ReactNode;
}) {
  return words.map((word) => {
    // if (selected === "") return selected;
    if (word.type === "space") 
    return (
      <span className="w-[200ch] border-b-2 border-gray-300 h-7 text-white select-none" >
        ________
      </span>
      );
    return <span key={word.word}>{word.word}</span>;
  });
}

export default function Level({ toRender }: Params) {
  const { imageSrc, words, options, correctOption } = toRender.data;
  const [selected, setSelected] = useState<null | string>(null);
  const setSelectedState = (option: string) => {
    setSelected(option);
  };
  return (
    <div className="bg-white text-2xl">
      <div className="  flex w-full">
        <Image
          src={imageSrc}
          width={"400"}
          height={"400"}
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
          active={Boolean(selected)}
          onclick={() => {
            alert(selected === correctOption);
          }}
        >
          Comprobar
        </Button>
      </div>
    </div>
  );
}
