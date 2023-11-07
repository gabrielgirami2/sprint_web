'use client'

import { ButtonHome, DivIconHome, Selector } from "@/components/Styles/style";
import styled from "styled-components";
import Link from "next/link";
import { Mukta } from 'next/font/google'


export default function Page() {
  const IconPorto = styled.img`
    transform: scale(0.7);
  `;
  
  const ButtonDiv = styled.div`
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translateY(-8px);
    height: 100%;
  `;
  
  const ImgDiv = styled.div`
    display: inline-flex;
    align-items: center;
    height: 100%;
    width: 20%;
    justify-content: center;
  `;

  return (
    <Selector>
      <DivIconHome>
        <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
      </DivIconHome>

      <ButtonDiv>
        <Link href="/request" className='linkButtonStyle'>
          <ButtonHome className="btn">
            <span className="text">Solicitar</span>
            <ImgDiv>
              <img src="img/Tow.svg" className="icon IconRequest" alt="icon" />
            </ImgDiv>
          </ButtonHome>
        </Link>
        <Link href="/accompany" className='linkButtonStyle AcompanyStyle'>
          <ButtonHome className="btn">
            <span className="text">Acompanhar</span>
            <ImgDiv>
              <img src="img/List.svg" className="icon IconAcompanyStyle" alt="icon" />
            </ImgDiv>
          </ButtonHome>
        </Link>
      </ButtonDiv>
    </Selector>
  )
}
