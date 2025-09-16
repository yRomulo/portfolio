import styled, { css } from 'styled-components';
import { Github, Twitter, Linkedin, ExternalLink, Code2, Server, Cloud, Globe, Mail, MapPin, Phone } from 'lucide-react';
//import { Linkedin  } from 'react-icons/fa/FaLinkedin ';
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiDatabase } from "react-icons/pi";

const Icon = styled(PiDatabase)`

`;

// Container geral
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  color: #111827;
  font-family: 'Inter', sans-serif;
`;

// Navegação fixa
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  // border-bottom: 1px solid ${({ theme }) => theme.navBorder};
  z-index: 50;
  padding-top: 1rem;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.navLinks};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

// Botão principal
const Button = styled.button`
  background-color: ${({theme}) => theme.buttonBg};
  color: white;
  height: 3rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  padding: 0 1.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: #3b82f6;
      border: 1px solid #3b82f6;

      &:hover {
        background-color: #3b82f6;
        color: white;
      }
    `}
`;

const SmallButton = styled.button`
  background-color: #e5e7eb;
  color: #374151;
  height: 2.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  padding: 0 1rem;
  transition: background-color 0.2s ease;
`;

const StyledSun = styled(MdLightMode)`
  margin: 0.3rem;
`;

const StyledMoon = styled(MdOutlineDarkMode)`
  margin: 0.3rem;
`;

// Exportar para uso nas próximas partes
export {
  Container,
  Nav,
  NavContent,
  NavBrand,
  NavLinks,
  NavLink,
  Button,
  SmallButton,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Server,
  Cloud,
  Globe,
  Mail,
  MapPin,
  Phone,
  StyledSun,
  StyledMoon
};