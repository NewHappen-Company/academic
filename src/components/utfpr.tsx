/* eslint-disable @next/next/no-img-element */
import React from 'react';

function UTFPRLogo() {

  return(
    <div data-testid='utfpr-logo' className='w-40 rounded h-auto bg-[#F6F6F6] p-6 mb-6 flex items-center justify-center'>
      <img src='/utfpr.svg' alt='UTFPR'/>
    </div>
  );
}

export {UTFPRLogo};