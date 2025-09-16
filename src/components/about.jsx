import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ muted }) => (muted ? '#f3f4f6' : 'transparent')};
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 700px;
  margin: 2rem auto 0;
  gap: 2rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
`;

const StatLabel = styled.div`
  color: #6b7280;
`;

const About = () => (
  <Section id="about" muted>
    <SectionTitle>Sobre Mim</SectionTitle>
    <AboutText>
      Com mais de 5 anos de experiência no desenvolvimento web, especializo-me em criar aplicações full stack robustas e escaláveis. Minha jornada começou com HTML/CSS básico e evoluiu para stacks modernas como React, Node.js, e cloud computing.
    </AboutText>
    <AboutText>
      Acredito que o melhor software é aquele que resolve problemas reais de forma intuitiva e eficiente. Valorizo a colaboração, o aprendizado contínuo e a entrega de valor tangível aos usuários finais.
    </AboutText>
    <StatsGrid>
      <StatItem>
        <StatNumber>10+</StatNumber>
        <StatLabel>Projetos Concluídos</StatLabel>
      </StatItem>
      <StatItem>
        <StatNumber>5+</StatNumber>
        <StatLabel>Anos de Experiência</StatLabel>
      </StatItem>
      <StatItem>
        <StatNumber>8</StatNumber>
        <StatLabel>Tecnologias Dominadas</StatLabel>
      </StatItem>
      <StatItem>
        <StatNumber>100%</StatNumber>
        <StatLabel>Satisfação do Cliente</StatLabel>
      </StatItem>
    </StatsGrid>
  </Section>
);

export default About;