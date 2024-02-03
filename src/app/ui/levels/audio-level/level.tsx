import Image from "next/image";

function AudioLevel() {
  return (
    <div className="text-2xl font-light h-full ">
      <div className="md:flex md:items-center md:gap-4">
        <div className="grid content-center justify-center md:w-full">
        <Image
          src={'/niña-comiendo.png'}
          width={300}
          height={300}
          alt=""
          className="select-none"
          />
        </div>
        <div >
          

          <p className="flex flex-wrap leading-loose text-balance">
          
          </p>
          
          
        </div>
      </div>
      <div className="mt-10 flex gap-2 flex-wrap justify-center max-sh-32">
       
          </div>
    </div>
  )
}

export default AudioLevel 