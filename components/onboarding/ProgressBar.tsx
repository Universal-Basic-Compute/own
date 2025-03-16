interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-ai-blue to-financial-green transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-2 bg-white opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
}
