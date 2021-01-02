import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import ButtonStyle from './components/ButtonStyle';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyle />
    </ThemeProvider>
  );
}

export default App;
