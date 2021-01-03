import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontWeight: 200,
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '10px 30px',
        borderRadius: '200px',
        height: 45,
        minWidth: 150,
      },
    },
    MuiTypography: {
      body2: {
        textAlign: 'justify',
      },
    },
  },
});
