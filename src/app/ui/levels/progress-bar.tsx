interface Params {
  percentage: `${string}%`;
}

export default function ProgressBar({ percentage }: Params) {
  return (
    <div className="h-5 w-full rounded-lg border-2 border-gray-400 overflow-hidden">
      <div
        className="h-5 bg-green-500 transition-all duration-[1500ms] p-[.4rem]"
        style={{ width: percentage }}
      >
        <div className="bg-green-400 h-full rounded-full"></div>
      </div>
    </div>
  );
}
