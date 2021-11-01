import {} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    color2: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    color2?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    main: string;
    second?: string;
  }
  interface SimplePaletteColorOptions {
    main: string;
    second?: string;
  }
}
