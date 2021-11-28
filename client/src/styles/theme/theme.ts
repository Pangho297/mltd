import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const colors = {
  baseColor: '',
};

const theme: DefaultTheme = {
  colors,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
