'use client'
import styled from "styled-components";
import { ButtonRequest, DivIconHome, Form, FormField, FormGroup, FormLabel, FormSpanBar, FormSpanChar, Rselector } from "@/components/Styles/style";
import { useState } from "react";

const IconPorto = styled.img`
  transform: scale(0.7);
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

export default function page() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <Rselector>
            <DivIconHome>
                <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
            </DivIconHome>

            <Form onSubmit={handleSubmit}>
                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>N</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>o</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>m</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 3 }}>e</FormSpanChar>
                    </FormLabel>
                </FormGroup>
                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>P</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>F</FormSpanChar>
                    </FormLabel>
                </FormGroup>
                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={cnh} onChange={(e) => setCnh(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>N</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>H</FormSpanChar>
                    </FormLabel>
                </FormGroup>
                <InputField type="email" placeholder="Email Pessoal" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={cnh} onChange={(e) => setCnh(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>N</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>H</FormSpanChar>
                    </FormLabel>
                </FormGroup>















                <InputField type="email" placeholder="Confirme seu Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
                <InputField type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <InputField type="password" placeholder="Confirme sua Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <br/>
                <ButtonRequest type="submit">
                    <p>Continuar</p>
                </ButtonRequest>
            </Form>
        </Rselector>
    );
}