"use client";

import Image from "next/image";
import { WordsList } from "./wordList";
import Options from "./options";
import { useCompleteWithAudio } from "./context";
import MicrofoneButton from "../microfoneButton";
import SelectOption from "./selectOption";


// Level
export default function Level() {
  
  const levelStore = useCompleteWithAudio()

  const { imageSrc } = levelStore.level.data

  return (<>
    <div className="text-2xl font-light ">
      <h3 className="text-center"></h3>
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
        <Options/>
      </div>
    </div>
    <div>
      <SelectOption/>
    </div>
    </>
  );
}

