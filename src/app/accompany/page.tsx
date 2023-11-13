'use client'
import axios from "axios";
import styled from 'styled-components';
import Image from "next/image";
import React, { useState } from 'react';
import { ButtonValid, DivIconHome, Input, Label, Selector, Span } from '@/components/Styles/style';
import { useRouter } from "next/navigation";

const IconPorto = styled.img`
  transform: scale(0.7);
`;

const DivForm = styled.div`   
  transform: translateY(37px);
  display: flex;
  justify-content: center;
`;

const Vform = styled.div`
  position: relative;
  width: 190px;

  @media (max-width: 360px) {
    width: 190px; /* Largura máxima para telas maiores que 360px */
  }

  @media (max-width: 600px) {
    width: 290px;
  }
  
  @media (max-width: 900px) {
    width: 390px;
  }

  @media (max-width: 1200px) {
    width: 490px;
  }

  @media (max-width: 1500px) {
    width: 590px;
  }

  @media (max-width: 1880px) {
    width: 690px;
  }
`;

const DivButton = styled.div`    
  display: inline-flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export default function Page() {
  const router = useRouter();
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState<number | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCpf = event.target.value.replace(/\D/g, '');

      if (newCpf.length <= 11) {
          setCpf(newCpf);
          setIsButtonActive(newCpf.length === 11);
      } 
  };

  const handleFormSubmit = async () => {
    if (cpf.length === 11) {
      try {
        const response = await axios.get(`http://localhost:8080/client?cpf=${cpf}`);
        if (response.data && Object.keys(response.data).length > 0) {
          const clientIdFromApi = response.data.protocol;
          setId(clientIdFromApi);
          console.log(response.data);
          alert(JSON.stringify(response.data.protocol, null, 2));
        } else {
        }
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    } else {
      alert('Por favor, insira um CPF válido com 11 dígitos.');
    }
  };

  const handleSubmitButtonClick = async () => {
    if (isButtonActive) {
        handleFormSubmit();
    }
  };

  return (
    <Selector>
      <DivIconHome>
        <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
      </DivIconHome>

      <DivForm>
        <Vform className="form-control">
          <Input type="text" value={cpf} onChange={handleCpfChange} required={true}/>
          <Label>
            <Span style={{ transitionDelay: '0ms' }}>D</Span>
            <Span style={{ transitionDelay: '50ms' }}>i</Span>
            <Span style={{ transitionDelay: '100ms' }}>g</Span>
            <Span style={{ transitionDelay: '150ms' }}>i</Span>
            <Span style={{ transitionDelay: '200ms' }}>t</Span>
            <Span style={{ transitionDelay: '250ms' }}>e</Span>
            <Span style={{ transitionDelay: '300ms' }}></Span>
            <Span style={{ transitionDelay: '350ms' }}>S</Span>
            <Span style={{ transitionDelay: '400ms' }}>e</Span>
            <Span style={{ transitionDelay: '450ms' }}>u</Span>
            <Span style={{ transitionDelay: '500ms' }}></Span>
            <Span style={{ transitionDelay: '550ms' }}>c</Span>
            <Span style={{ transitionDelay: '600ms' }}>P</Span>
            <Span style={{ transitionDelay: '650ms' }}>F</Span>
            <Span style={{ transitionDelay: '705ms', marginLeft: '3px' }}>!</Span>
          </Label>
        </Vform>
      </DivForm>

      <DivButton>
        <ButtonValid onClick={handleSubmitButtonClick} disabled={!isButtonActive} style={{ opacity: isButtonActive ? 1 : 0.4 }}>
          <p className="Vtext">Seguinte</p> 
          <Image width={25} height={25} src="img/bx-right-arrow-alt.svg" className="iconA" alt="icon" />
        </ButtonValid>
      </DivButton>
    </Selector>
  );
}