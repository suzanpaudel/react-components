import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import ButtonStyle from './components/ButtonStyle';
import BreadcrumbStyle from './components/BreadcrumbStyle';
import InputStyle from './components/InputStyle';
import MenuBarStyle from './components/MenuBarStyle';
import CardStyle from './components/CardStyle';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyle />
      <BreadcrumbStyle />
      <InputStyle />
      <MenuBarStyle />
      <CardStyle />
    </ThemeProvider>
  );
}

export default App;
