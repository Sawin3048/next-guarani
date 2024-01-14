import Heart from "@/app/ui/svg/heart";

interface Params {
  num: number
}

export default function Hearts({num}: Params) {
  if(num === 0) return<div className="text-red-500 flex">
  <Heart stuffed={false}/>
  <Heart stuffed={false}/>
  <Heart stuffed={false}/>
  </div>
  if (num === 1) return <div className="text-red-500 flex">
  <Heart stuffed/>
  <Heart stuffed={false}/>
  <Heart stuffed={false}/>
  </div>
  if(num === 2) return<div className="text-red-500 flex">
  <Heart stuffed/>
  <Heart stuffed/>
  <Heart stuffed={false}/>
  </div>
  if(num === 3) return<div className="text-red-500 flex">
  <Heart stuffed/>
  <Heart stuffed/>
  <Heart stuffed/>
  </div>
}