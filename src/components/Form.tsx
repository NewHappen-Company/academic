import React, { FormHTMLAttributes } from 'react';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement>{
  
}

function Form({
  ...rest
}: IFormProps) {
  return(
    <form 
      data-testid="form-default"
      className='w-11/12 md:w-1/2 lg:w-1/3 h-auto p-10 bg-white rounded'
      {...rest}
    >
      
    </form>
  );
}

export {Form};