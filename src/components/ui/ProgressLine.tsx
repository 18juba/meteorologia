import * as React from "react"
import * as RadixProgress from '@radix-ui/react-progress';

const ProgressLine = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-5 px-0">
      <RadixProgress.Root 
        className="relative overflow-hidden bg-gray-200 rounded-full w-full h-1"
        style={{ transform: 'translateZ(0)' }}
      >
        <RadixProgress.Indicator 
          className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-transform duration-300 ease-in-out"
          style={{ 
            transform: 'translateX(-100%)',
            animation: 'indeterminate-progress 1.5s infinite ease-in-out'
          }}
        />
      </RadixProgress.Root>
      <style jsx>{`
        @keyframes indeterminate-progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressLine;