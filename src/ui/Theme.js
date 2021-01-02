import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
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
