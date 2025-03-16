interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-light-medium dark:bg-medium-dark rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-ai-blue to-financial-green"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
