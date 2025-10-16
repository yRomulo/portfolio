import styled from 'styled-components';
import { Code2, Server, Cloud, Globe } from './container'; 

const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media(max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`;

const CardContainer = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  color: #111827;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

const IconWrapper = styled.span`
  color: #3b82f6;
  display: inline-flex;
  align-items: center;
`;

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Habilidades Técnicas</SectionTitle>
    <Grid>
      <CardContainer>
        <CardHeader>
          <CardTitle>
            <IconWrapper><Code2 size={20} /></IconWrapper> Frontend
          </CardTitle>
          <CardDescription>Principais tecnologias de frontend</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>React.js / Next.js / Vite.js</li>
            <li>TypeScript</li>
            <li>Styled Components</li>
            <li>Tailwind CSS</li>
          </ul>
        </CardContent>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <CardTitle>
            <IconWrapper><Server size={20} /></IconWrapper> Backend
          </CardTitle>
          <CardDescription>Servidores, APIs e bancos de dados</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Node.js</li>
            <li>Knex</li>
            <li>SQLite</li>
            <li>MongoDB</li>
          </ul>
        </CardContent>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <CardTitle>
            <IconWrapper><Cloud size={20} /></IconWrapper> DevOps
          </CardTitle>
          <CardDescription>Infraestrutura e automação</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>AWS / Azure</li>
            <li>Docker</li>
          </ul>
        </CardContent>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <CardTitle>
            <IconWrapper><Globe size={20} /></IconWrapper> Outras
          </CardTitle>
          <CardDescription>Ferramentas e metodologias</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Git & GitHub</li>
            <li>Figma Design</li>
            <li>Scrum/Agile</li>
            <li>Testes Automatizados</li>
          </ul>
        </CardContent>
      </CardContainer>
    </Grid>
  </Section>
);

export default Skills;