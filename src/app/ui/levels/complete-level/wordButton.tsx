import clsx from "clsx";

interface Params {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  disabled?: boolean
}

export function WordButton({ children, className, onclick, disabled }: Params) {
  return (
    <button
      disabled={!!disabled}
      className={clsx(className,
        `py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 shadow  text-nowrap border-neutral-400`, {
          "text-neutral-400": disabled,
          "active:scale-105": !disabled,
          "text-neutral-800": !disabled
        }
        
      )}
      onClick={onclick}
    >
      {children}
    </button>
  );
}