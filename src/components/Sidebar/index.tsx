import { useContext } from "react";

import { useRouter } from "next/router";

import { ContextDefaultTheme } from "src/layouts/Default";

import {
  SidebarContainer,
  Switch,
  SwitchArea,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";

import homePageLogo from "src/assets/homePageLogo.png";

export function Sidebar() {
  const router = useRouter();
  const { setTheme, theme } = useContext(ContextDefaultTheme);

  if (router.pathname !== "/")
    return (
      <SidebarContainer>
        <img src={homePageLogo.src} alt="Rick and Morty Logo" />
        <SwitchArea>
          <SwitchWrapper>
            <Switch
              checked={theme}
              id="checkbox"
              type="checkbox"
              onChange={() => setTheme(!theme)}
            />
            <SwitchLabel htmlFor="checkbox" />
          </SwitchWrapper>
        </SwitchArea>
      </SidebarContainer>
    );
  else return null;
}
