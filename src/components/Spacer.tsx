import React from 'react';

interface ISpacerProps {}

function Spacer({}: ISpacerProps) {
  return(
    <div className='w-full h-6'/>
  );
}

export {Spacer};