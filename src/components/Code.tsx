import React from 'react';

export interface ICodeProps {
  text: string;
}

function Code({text}: ICodeProps) {
  return(
    <div className='w-full rounded h-auto bg-[#F6F6F6] p-10 mb-6 flex items-center justify-center'>
      <h1 data-testid="code-display" className='text-lg text-center font-extrabold'>{text}</h1>
    </div>
  );
}

export {Code};