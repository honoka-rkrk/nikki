import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.color2.main,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));

export default function ThemeUsage() {
  return <MyThemeComponent>Styled div with theme</MyThemeComponent>;
}
