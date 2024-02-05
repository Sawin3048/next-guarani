import Image from "next/image";
import { ButtonLink } from "../../buttond";
import MicIcon from "../../svg/mic";
import { useState } from "react";
import clsx from "clsx";

function AudioLevel() {
  const [record, setRecord] = useState(false)

  return (
    <div className="text-2xl font-light h-full flex flex-col justify-around ">
      <div className="md:flex md:items-center md:gap-4">
        <div className="grid content-center md:justify-normal justify-center">
        <Image
          src={'/niña-comiendo.png'}
          width={300}
          height={300}
          alt=""
          className="select-none"
          />
        </div>
        <div>
          <h3 className="text-center font-bold text-neutral-700">{"Mba'e ojapo?"}</h3>         
        </div>
      </div>
      <div className="mt-10 flex gap-2 flex-wrap justify-center max-sh-32 w-full">
        <ButtonLink className="hover:bg-inherit" callback={()=> setRecord(s=>!s)}>
          <MicIcon className={clsx("w-16 h-16", {
            "text-gray-500": !record,
            "text-red-500": record
          })} />
        </ButtonLink>
      </div>
    </div>
  )
}

export default AudioLevel 