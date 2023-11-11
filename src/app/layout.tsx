'use client'
import { ThemeProvider } from 'styled-components'
import './globals.css'
import { darkTheme, lightTheme, Container } from '@/components/Styles/style'
import { useState } from 'react';

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
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={ theme ==='dark' ?  darkTheme : lightTheme }>
          <Container>   
            <label className="switch">
              <input theme={ theme } onClick={ toggleTheme } type="checkbox" ></input>
              <span className="slider"></span>
            </label>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}