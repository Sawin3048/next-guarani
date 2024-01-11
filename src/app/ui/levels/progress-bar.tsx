interface Params {
  percentage: `${string}%`;
}

export default function ProgressBar({ percentage }: Params) {
  return (
    <div className="h-5 w-full rounded-lg border-2 border-gray-400 overflow-hidden">
      <div
        className="h-5 bg-green-500 transition-all duration-[1500ms]"
        style={{ width: percentage }}
      ></div>
    </div>
  );
}
