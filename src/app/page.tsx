
'use client'

import { Selector, DivIconHome, ButtonHome } from "../components/Styles/style";
import styled from "styled-components";
import './globals.css'
import Link from "next/link";
import Image from "next/image";


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

  @media (max-width: 360px) {
    width: 100%;
    display: flex;
    }

  @media (max-width: 1880px) {
    width: 100%;
    display: flex;
  }
`;
  

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.6);
  width: 72px;
  height: 64px;
  justify-content: center;
`;

export default function Page() {
  return (
    <Selector>
      <DivIconHome>
        <IconPorto src="img/logo-portoseguro-blue.svg" alt="Logo" />
      </DivIconHome>

      <ButtonDiv>
        <Link href="/valid" className='linkButtonStyle'>
          <ButtonHome className="btn">
            <span className="text">Solicitar</span>
            <ImgDiv>
              <Image width={58} height={48} src="img/Tow.svg" className="icon IconRequest" alt="icon" />
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