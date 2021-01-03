import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import ButtonStyle from './components/ButtonStyle';
import BreadcrumbStyle from './components/BreadcrumbStyle';
import InputStyle from './components/InputStyle';
import MenuBarStyle from './components/MenuBarStyle';
import CardStyle from './components/CardStyle';
import Footer from './components/Footer';
import NavbarStyle from './components/NavbarStyle';
import ReactStrapNavabar from './components/ReactStrapNavabar';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarStyle />
      <ReactStrapNavabar />
      <ButtonStyle />
      <BreadcrumbStyle />
      <InputStyle />
      <MenuBarStyle />
      <CardStyle />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
