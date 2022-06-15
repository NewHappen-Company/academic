import React from 'react';
import { Response } from '../../models/analytics';
import { DocumentFooter } from './Footer';
import { DocumentHeader } from './Header';
import { DocumentSection } from './Section';

interface IDocumentProps {
  data: Response;
}

function Document({ data }: IDocumentProps) {
  return(
    <div 
      data-testid="student-document"
      className='w-11/12 md:w-11/12 lg:w-1/2 h-auto p-10 bg-white rounded'
    >
      <DocumentHeader professional={data?.professional}/>

      <DocumentSection title="Dados do aluno">
        <p className='font-medium text-[#938E8E] mb-px'>Nome: {data?.user?.name || 'Nome'}</p>
        <p className='font-medium text-[#938E8E] mb-px'>Email: {data?.user?.email || 'Email'}</p>
        <p className='font-medium text-[#938E8E]'>Registro Acadêmico: {data?.academic?.number || 'Registro'}</p>
      </DocumentSection>

      <DocumentSection title="Dados pessoais">
        <p className='font-medium text-[#938E8E] mb-px'>Sexo: {data?.identification?.sex || '...'}</p>
        <p className='font-medium text-[#938E8E]'>Nascimento: {data?.formated?.birth || '...'}</p>
        <p className='font-medium text-[#938E8E]'>Idade: {data?.formated?.age || '...'}</p>
      </DocumentSection>

      <DocumentSection title={`Solicitação (${data?.formated?.startDate})`}>
      <p className='font-medium text-[#938E8E] mb-px'>{data?.identification?.description || '...'}</p>
      </DocumentSection>

      <DocumentFooter
        professionalId={data?.professional?.id}
        userId={data?.user?.id}
        scheduleId={data?.schedule?.id}
        companyId={data?.companyId}
        studentName={data?.user?.name}
        studentTel={data?.user?.phone}
      />
    </div>
  );
}

export {Document};