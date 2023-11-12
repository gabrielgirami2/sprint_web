
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

 @media (min-width: 600px) {
    width: 150px;
    height: 100%;
  }

  @media (min-width: 600px) {
    width: 480px;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 600px;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 820px) {
    width: 650px;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 912px) {
    width: 700px;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: 800px;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    width: 1000px;
    height: 100%;
    align-items: center;
    flex-direction: column;
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