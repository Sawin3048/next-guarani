"use client";

import Image from "next/image";
import Options from "./options";
import { useCompleteWithAudio } from "./context";
import SelectOption from "./selectOption";
import { useChapter } from "@/app/level/[levelID]/context/chapter-handler-context";



// Level
export default function Level() {
  
  const levelStore = useCompleteWithAudio()
  const chapter = useChapter()
  const { imageSrc } = levelStore.level.data

  return (<>
    <div className="text-2xl font-light ">
      <h3 className="text-center"></h3> 
      <div className="md:flex md:justify-center md:gap-4">
        <div className="grid content-center justify-center ">
        <Image
          src={imageSrc}
            width={300}
          height={300}
          alt=""
          className="select-none"
          />
        </div>

        {/* <button onClick={()=>chapter.complete()}>Click</button> */}
        <div className="flex justify-center md:items-center "  >
          <p className="flex flex-wrap w-fit leading-loose text-balance h-fit">
          {levelStore.level.data.question}
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

