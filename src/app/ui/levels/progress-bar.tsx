interface Params {
  percentage: `${string}%`;
  duration?: string
}

export default function ProgressBar({ percentage, duration }: Params) {
  return (
    <div className="h-5 w-full rounded-lg border-2 border-gray-400 overflow-hidden">
      <div
        className="h-5 bg-green-500 transition-all ease-linear  p-[.4rem] "
        style={{
          width: percentage,
          transitionDuration: `${duration || '1500ms' }`
        }}
      >
        <div className="bg-green-400 h-full rounded-full"></div>
      </div>
    </div>
  );
}
