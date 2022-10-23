import { createContext, ReactNode, useState } from "react";

import { ThemeProvider } from "styled-components";

import { Sidebar } from "src/components/Sidebar";

import { darker, white } from "src/styles/themes";

import { Container } from "./styles";

interface DefaultLayoutProps {
  children: ReactNode;
}

interface ContextDefaultThemeProps {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

export const ContextDefaultTheme = createContext(
  {} as ContextDefaultThemeProps
);

export function Default({ children }: DefaultLayoutProps) {
  const [theme, setTheme] = useState(true);

  return (
    <ContextDefaultTheme.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme ? darker : white}>
        <Sidebar />
        <Container>{children}</Container>
      </ThemeProvider>
    </ContextDefaultTheme.Provider>
  );
}
