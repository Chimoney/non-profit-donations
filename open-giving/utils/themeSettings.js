const font = "'Poppins', sans-serif";

const text = '#000';
const theme = {
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      // default: '#08010a',
      // paper: '#08010a',
      // default: "#fafafa",
    },
    primary: {
      main: '#8A2BE2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9370DB',
      contrastText: '#fff',
    },
    // accent: {
    //   ...accent
    // },
    brand: {
      main: '#220028',
      contrastText: '#fff',
      secondary: '#F7E9FF',
      gradient: 'linear-gradient(90deg, #FF9D7E 0%, #DD7EFF 100%)',
    },
    text: {
      primary: '#8A2BE2',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 100px #181A21 inset',
          '-webkit-text-fill-color': '#fff',
        },
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color: text,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          color: text,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:-webkit-autofill': {
            // "-webkit-box-shadow": `0 0 0 100px ${paper} inset`,
            '-webkit-text-fill-color': text,
          },
          '& fieldset': {
            borderColor: text,
          },
          color: text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: text,
          fontSize: '12px',
          fontWeight: 400,
        },
      },
    },
  },
  typography: {
    fontFamily: font,
    // fontFamily: font,
    button: {
      textTransform: 'none',
    },
  },
};

export default theme;
