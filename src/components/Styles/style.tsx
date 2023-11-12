import styled, { keyframes, css } from "styled-components";

// #region keyframes
const backgroundLight = keyframes`
  0% { background: #CDF5FD; }
  50% { background: #A0E9FF; }
  100% { background: #89CFF3; }
`;

const backgroundDark = keyframes`
  0% { background: #6393b7; }
  50% { background: #4d82aa; }
  100% { background: #3b7aaa; }
`;
// #endregion

// #region Theme
export const lightTheme = {
  backgroundColor: css`${backgroundLight} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#00A9FF",
  colorTexto: "#262626",
  colorBackIcon: "#fff",
  colorBackButton: "#A3DEFF",
  colorText: "#00A9FF",
  colorBackDialogChat: "#f1f1f1",
  colorBackDialogUser: "#00A9FF",
  colorBackDialogChatText: "#333",
  colorBackDialogText: "#000",
  colorBackButtonChat: "#41bbff",
  colorBackTextChat: "#fff",
};

export const darkTheme = {
  backgroundColor: css`${backgroundDark} 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) infinite alternate-reverse forwards`,
  colorBackMain: "#0080ff",
  colorTexto: "#dcdcdc",
  colorBackIcon: "#262626",
  colorBackButton: "#234eceee",
  colorText: "#b3b3b3",
  colorBackDialogChat: "#262626",
  colorBackDialogUser: "#1074d8",
  colorBackDialogChatText: "#d4d4d4",
  colorBackButtonChat: "#064da9",
  colorBackTextChat: "#262626",
  colorBackDialogText: "#fff",
};

export const Container = styled.div`
  animation: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorTexto};
  width: 100vw;
  height: 100vh;

  
`;
// #endregion

// #region Home
export const DivIconHome = styled.div`
  background-color: ${(props) => props.theme.colorBackIcon};
  width: 20%;
  height: 20%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  transform: translate(208%, -46%);
  box-shadow: 11px 16px 29px 3px rgba(0, 0, 0, 0.20);
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
  height: 36%;
  border-radius: 50px;
  transform: translate(15%, 89%);
  box-shadow: 23px 21px 38px 2px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colorBackMain};
`;

export const ButtonHome = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 11px 16px 27px 3px rgba(0, 0, 0, 0.20);
  background: ${(props) => props.theme.colorBackButton};
  color:  ${(props) => props.theme.colorText};

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  &:focus {
    outline: none;
  }
`;
// #endregion

// #region Valid
export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px ${(props) => props.theme.colorTexto} solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: ${(props) => props.theme.colorBackTextChat};

  &:focus, &:valid{
    outline: 0;
    border-bottom-color: ${(props) => props.theme.colorTexto};
  }

  &:focus+label span,
  &:valid+label span {
    color: ${(props) => props.theme.colorTexto};
    transform: translateY(-30px);
  }
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: ${(props) => props.theme.colorTexto};
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
`;

export const ButtonValid = styled.button`
  width: 45%; 
  height: 24%;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 11px 16px 27px 3px rgba(0, 0, 0, 0.20);
  background: ${(props) => props.theme.colorBackButton};
  color:  ${(props) => props.theme.colorText};

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  &:focus {
    outline: none;
  }

  &:hover .Vtext {
    transition: all 0.5s;
    opacity: 0;
  }

  &:active, 
  &:hover,
  &:hover .iconA, 
  &:active .iconA {
    transition: transform 0.3s ease;
  }

  &:active {
    transform: scale(1.1) ;
  }

  &:hover .iconA, &:active .iconA {
    transform: scale(1.2) translateX(-100%);
  }
`;
// #endregion

// #region Resquest
export const Rselector = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
  height: 88%;
  border-radius: 50px;
  transform: translate(15%, 8%);
  box-shadow: 23px 21px 38px 2px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colorBackMain};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const FormField = styled.input`
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const FormSpanBar = styled.span`
  position: relative;
  display: block;
  width: 200px;

  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    left: 50%;
  }

  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    right: 50%;
  }
`;

export const FormLabel = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
`;

export const FormSpanChar = styled.span`
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * .05s);
`;




export const ButtonRequest = styled.button`
  width: 45%; 
  height: 24%;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 11px 16px 27px 3px rgba(0, 0, 0, 0.20);
  background: ${(props) => props.theme.colorBackButton};
  color:  ${(props) => props.theme.colorText};

  &:hover {
    box-shadow: 0 0 20px 0px #2e2e2e3a;
  }

  &:focus {
    outline: none;
  }

  &:hover .Vtext {
    transition: all 0.5s;
    opacity: 0;
  }

  &:active, 
  &:hover,
  &:hover .iconA, 
  &:active .iconA {
    transition: transform 0.3s ease;
  }

  &:active {
    transform: scale(1.1) ;
  }

  &:hover .iconA, &:active .iconA {
    transform: scale(1.2) translateX(-100%);
  }
`;

// #endregion