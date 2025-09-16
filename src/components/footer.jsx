import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #f3f4f6;
  padding: 2rem 1rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
`;

const FooterComponent = () => (
  <Footer>
    © {new Date().getFullYear()} Rômulo Dias Marroso | Portfólio criado com Vite e Styled-Components
  </Footer>
);

export default FooterComponent;