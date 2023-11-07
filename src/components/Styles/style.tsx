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