import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import ButtonStyle from './components/ButtonStyle';
import BreadcrumbStyle from './components/BreadcrumbStyle';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyle />
      <BreadcrumbStyle />
    </ThemeProvider>
  );
}

export default App;
