import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      second: '#fff'
    },
    color2: {
      main: '#500',
      second: '#255'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    }
  }
});

export default theme;
