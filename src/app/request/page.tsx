'use client'
import axios from "axios";
import { useRouter } from 'next/router';
import { useState } from "react";
import styled from "styled-components";
import { ButtonRequest, DivIconHome, FormField, FormGroup, FormLabel, FormSpanBar, FormSpanChar, Rselector } from "@/components/Styles/style";

const IconPorto = styled.img`
    transform: scale(0.7);
`;

const Form = styled.div`
    transform: translateY(22px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function page() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [doEmailsMatch, setDoEmailsMatch] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [id, setId] = useState<string | null>(null);

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCpf = event.target.value.replace(/\D/g, '');

        if (newCpf.length <= 11) {
            setCpf(newCpf);
        } 
    };

    const handleCnhChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCnh = event.target.value.replace(/\D/g, '');

        if (newCnh.length <= 11) {
            setCnh(newCnh);
        } 
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };

    const handleConfirmEmailChange = (event) => {
        const newConfirmEmail = event.target.value;
        setConfirmEmail(newConfirmEmail);
        setDoEmailsMatch(newConfirmEmail === email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const userData = { name, cpf, cnh, email, password };
    
        try {
            const response = await axios.post('http://localhost:8080/client', userData);
            setId(response.data.id);

            console.log('Server response:', response.data);

            setName('');
            setCpf('');
            setCnh('');
            setEmail('');
            setConfirmEmail('');
            setPassword('');
            setConfirmPassword('');
            router.push('/vehicle');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Rselector>
            <DivIconHome style={{ height: '8%' }}>
                <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
            </DivIconHome>

            <Form onSubmit={handleSubmit}>
                <FormGroup className="wave-group" style={{ marginTop: 0}}>
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
                    <FormField required type="text" className="input" value={cpf} onChange={handleCpfChange}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>P</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>F</FormSpanChar>
                    </FormLabel>
                </FormGroup>

                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={cnh} onChange={handleCnhChange}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>N</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>H</FormSpanChar>
                    </FormLabel>
                </FormGroup>

                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={email} onChange={handleEmailChange}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>E</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>m</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>a</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 3 }}>i</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 4 }}>l</FormSpanChar>
                    </FormLabel>
                </FormGroup>
            
                <FormGroup className="wave-group">
                    <FormField required type="text" className="input" value={confirmEmail} onChange={handleConfirmEmailChange}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>o</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>n</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 3 }}>f</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 4 }}>i</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 5 }}>r</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 6 }}>m</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 7 }}>a</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 8 }}>r</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 9,  marginLeft: 7 }}>E</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 10 }}>m</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 11 }}>a</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 13 }}>i</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 14 }}>l</FormSpanChar>
                    </FormLabel>
                </FormGroup>

                <FormGroup className="wave-group">
                    <FormField required type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>S</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>e</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>n</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 3 }}>h</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 4 }}>a</FormSpanChar>
                    </FormLabel>
                </FormGroup>

                <FormGroup className="wave-group">
                    <FormField required type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <FormSpanBar className="bar"></FormSpanBar>
                    <FormLabel className="label">
                        <FormSpanChar className="label-char" style={{ '--index': 0 }}>C</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 1 }}>o</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 2 }}>n</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 3 }}>f</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 4 }}>i</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 5 }}>r</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 6 }}>m</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 7 }}>a</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 8 }}>r</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 9,  marginLeft: 7 }}>S</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 10 }}>e</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 11 }}>n</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 12 }}>h</FormSpanChar>
                        <FormSpanChar className="label-char" style={{ '--index': 13 }}>a</FormSpanChar>
                    </FormLabel>
                </FormGroup>
                <br/>
                <ButtonRequest onClick={handleSubmit} type="submit" style={{ transform: 'translateY(36px)' }}><p>Continuar</p></ButtonRequest>
            </Form>
        </Rselector>
    );
}