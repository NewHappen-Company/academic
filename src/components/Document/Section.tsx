import { Column } from 'angel_ui';
import React, { ReactNode } from 'react';

interface IDocumentSectionProps {
  title: string;
  children: ReactNode;
}

function DocumentSection({ title, children }: IDocumentSectionProps) {
  return(
    <Column mt='mt-10' horizontalAlign='start'>
      <h1 className='text-lg font-extrabold mb-4'>{title}</h1>

      {children}
    </Column>
  );
}

export {DocumentSection};