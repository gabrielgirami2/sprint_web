'use client'  
import { useState } from "react";
import { useRouter } from 'next/router';
import { ButtonRequest, DivIconHome, FormField, FormGroup, FormLabel, FormSpanBar, FormSpanChar, Rselector } from "@/components/Styles/style";
import styled from "styled-components";
import axios from "axios";

const IconPorto = styled.img`
  transform: scale(0.7);
`;

const Form = styled.div`
  transform: translateY(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function page() {
  const router = useRouter();
  const [plate, setPlate] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [quantityAxes, setQuantityAxes] = useState('');
  const [modification, setModification] = useState('');
  const [blindage, setBlindage] = useState(''); 
  const [model, setModel] = useState(''); 
  const [charge, setCharge] = useState(''); 
  const [client, setClient] = useState(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      plate,
      size,
      weight,
      quantityAxes,
      modification,
      blindage,
      model,
      charge,
      client
    };

    try {
      const response = await axios.post('http://localhost:8080/Vehicle', userData);

      console.log('Server response:', response.data);

      setPlate('');
      setSize('');
      setWeight('');
      setQuantityAxes('');
      setModification('');
      setBlindage('');
      setModel('');
      setCharge('');

      router.push('/protocol');
    } catch (error) {
      console.error('Error submitting form:', error);
    };
  }

  return (
    <Rselector>
      <DivIconHome style={{ height: '8%' }}>
          <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
      </DivIconHome>

      <Form>
        <FormGroup className="wave-group" style={{ marginTop: 0}}>
          <FormField required type="text" className="input" value={plate} onChange={(e) => setPlate(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>P</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>l</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>c</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>a</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="text" className="input" value={size} onChange={(e) => setSize(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>T</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>m</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>n</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 5 }}>h</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 6 }}>o</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="text" className="input" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>P</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>e</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>s</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>o</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="text" className="input" value={quantityAxes} onChange={(e) => setQuantityAxes(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>Q</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>u</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>n</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>t</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 5 }}>i</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 6 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 7 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 8 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 9 }}>e</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 10,  marginLeft: 7  }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 11 }}>e</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 12,  marginLeft: 7   }}>E</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 13 }}>i</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 14 }}>x</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 15 }}>o</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 16 }}>s</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="text" className="input" value={modification} onChange={(e) => setModification(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>M</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>o</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>i</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>f</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 5 }}>i</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 6 }}>c</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 7 }}>â</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 8 }}>o</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="password" className="input" value={blindage} onChange={(e) => setBlindage(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>B</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>l</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>i</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>n</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 5 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 6 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 7 }}>o</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="password" className="input" value={model} onChange={(e) => setModel(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>M</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>o</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>d</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>e</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>l</FormSpanChar>
          </FormLabel>
        </FormGroup>

        <FormGroup className="wave-group">
          <FormField required type="password" className="input" value={charge} onChange={(e) => setCharge(e.target.value)}/>
          <FormSpanBar className="bar"></FormSpanBar>
          <FormLabel className="label">
            <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 1 }}>a</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 2 }}>r</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 3 }}>g</FormSpanChar>
            <FormSpanChar className="label-char" style={{ '--index': 4 }}>a</FormSpanChar>
          </FormLabel>
        </FormGroup>
        <br/>
        <ButtonRequest onClick={handleSubmit} type="submit" style={{ transform: 'translateY(15px)' }}><p>Continuar</p></ButtonRequest>
      </Form>
    </Rselector>
  );
}