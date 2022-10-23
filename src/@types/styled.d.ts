import "styled-components";
import { white } from "../styles/themes";

type ThemeType = typeof white;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
