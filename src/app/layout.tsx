'use client'

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, Container } from '@/components/Styles/style';
import { useState } from 'react';
import '@/components/Styles/style.css';

//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <html lang ="pt-br">
      <head />
      <body>
        <ThemeProvider theme={theme ==='dark' ?  darkTheme : lightTheme}>
          <Container>   
            <label className="switch">
              <input theme={theme} onClick={toggleTheme} type="checkbox" ></input>
              <span className="slider"></span>
            </label>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}