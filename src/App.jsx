import { Container, Nav, NavContent, NavBrand, NavLinks, NavLink, StyledSun, StyledMoon } from './components/container'; // Parte 1
import Hero from './components/hero'; // Parte 2
import About from './components/about'; // Parte 3
import Skills from './components/skills'; // Parte 4
import Projects from './components/projects'; // Parte 5
import Contact from './components/contact'; // Parte 7
import Footer from './components/footer'; // Parte 8
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import {useState} from 'react';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    style={{
      width: 50,
      height: 50,
      position: 'fixed',
      bottom: 20,
      right: 20,
      padding: '0.5rem 0.5rem',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: theme === 'dark' ? '#f9fafb' : '#111827',
      color: theme === 'dark' ? '#111827' : '#f9fafb',
      zIndex: 100,
      fontSize: '1.5rem',
      userSelect: 'none',
    }}
    aria-label="Alternar tema claro/escuro"
    title="Alternar tema claro/escuro"
  >
    {theme === 'dark' ? <StyledSun/> : <StyledMoon/>}
  </button>
);

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(curr => (curr === 'dark' ? 'light' : 'dark'));
  };
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav>
      <NavContent>
        <NavBrand href='/portfolio'>Rômulo Dias</NavBrand>
        <NavLinks>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;