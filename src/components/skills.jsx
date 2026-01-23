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

const TechSection = styled.div`
  margin-top: 2.5rem;
`;

const TechGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  margin-top: 1rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  background: #ffffff;
  border: 1px solid #0000002a;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  }
`;

const TechLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  filter: grayscale(0%);
`;

const TechName = styled.span`
  font-size: 0.85rem;
  color: #374151;
`;

const techsByCategory = {
  Frontend: [
    { name: 'React', src: 'https://cdn.simpleicons.org/react' },
    { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript' },
    { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Tailwind', src: 'https://cdn.simpleicons.org/tailwindcss' }
  ],
  Backend: [
    { name: 'Node.js', src: 'https://cdn.simpleicons.org/node-dot-js' },
    { name: 'Knex', src: 'https://cdn.simpleicons.org/knex' },
    { name: 'SQLite', src: 'https://cdn.simpleicons.org/sqlite' },
    { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb' }
  ],
  DevOps: [
    { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', src: 'https://cdn.simpleicons.org/docker' }
  ],
  Outras: [
    { name: 'Git', src: 'https://cdn.simpleicons.org/git' },
    { name: 'Figma', src: 'https://cdn.simpleicons.org/figma' },
    { name: 'Jest', src: 'https://cdn.simpleicons.org/jest' }
  ]
};

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Habilidades Técnicas</SectionTitle>
    {/* <Grid>
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
    </Grid> */}

    <TechSection>
      <CardHeader>
        <CardTitle>
          <IconWrapper><Code2 size={20} /></IconWrapper> Frontend
        </CardTitle>
      </CardHeader>
      <TechGrid>
        {[
          { name: 'HTML5', src: 'https://cdn.simpleicons.org/html5' },
          { name: 'CSS3', src: 'https://cdn.simpleicons.org/css' },
          { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript' },
          { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript' },

          { name: 'React', src: 'https://cdn.simpleicons.org/react' },
          { name: 'Next.js', src: 'https://cdn.simpleicons.org/next.js' },
          { name: 'Vue.js', src: 'https://cdn.simpleicons.org/vue.js' },
          { name: 'Angular', src: 'https://cdn.simpleicons.org/angular' },

          { name: 'Tailwind', src: 'https://cdn.simpleicons.org/tailwindcss' },
          { name: 'Styled Components', src: 'https://cdn.simpleicons.org/styledcomponents' },
          { name: 'Redux', src: 'https://cdn.simpleicons.org/redux' },
        ].map((tech) => (
          <TechItem key={tech.name}> 
            <TechLogo src={tech.src} alt={tech.name} onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGrid>

      <CardHeader>
        <CardTitle>
          <IconWrapper><Code2 size={20} /></IconWrapper> Backend
        </CardTitle>
      </CardHeader>
      <TechGrid>
        {[
          { name: 'C', src: 'https://cdn.simpleicons.org/c' },
          { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          
          { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs' },
          { name: 'Express', src: 'https://cdn.simpleicons.org/express' },
          { name: 'Firebase', src: 'https://cdn.simpleicons.org/firebase' },
          { name: 'Supabase', src: 'https://cdn.simpleicons.org/supabase' },
          
          { name: 'Django', src: 'https://cdn.simpleicons.org/django' },
          { name: 'Flask', src: 'https://cdn.simpleicons.org/flask' },
          { name: 'Spring Boot', src: 'https://cdn.simpleicons.org/springboot' },
          
          { name: 'REST', src: 'https://img.icons8.com/ios-filled/64/000000/api.png' },
          { name: 'JWT', src: 'https://cdn.simpleicons.org/jsonwebtokens' },
        ].map((tech) => (
          <TechItem key={tech.name}> 
            <TechLogo src={tech.src} alt={tech.name} onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGrid>
      
      <CardHeader>
        <CardTitle>
          <IconWrapper><Code2 size={20} /></IconWrapper> DevOps
        </CardTitle>
      </CardHeader>
      <TechGrid>
        {[
          { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
          { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
          { name: 'Docker', src: 'https://cdn.simpleicons.org/docker' },
          { name: 'Kubernetes', src: 'https://cdn.simpleicons.org/kubernetes' },
          { name: 'Vercel', src: 'https://cdn.simpleicons.org/vercel' },
          { name: 'Netlify', src: 'https://cdn.simpleicons.org/netlify' },
          { name: 'Render', src: 'https://cdn.simpleicons.org/render' },
          { name: 'Railway', src: 'https://cdn.simpleicons.org/railway' },

        ].map((tech) => (
          <TechItem key={tech.name}> 
            <TechLogo src={tech.src} alt={tech.name} onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGrid>

      <CardHeader>
        <CardTitle>
          <IconWrapper><Code2 size={20} /></IconWrapper> Outras
        </CardTitle>
      </CardHeader>
      <TechGrid>
        {[
          
          { name: 'Git', src: 'https://cdn.simpleicons.org/git' },
          { name: 'GitHub', src: 'https://cdn.simpleicons.org/github' },
          { name: 'Figma', src: 'https://cdn.simpleicons.org/figma' },
          { name: 'Wordpress', src: 'https://cdn.simpleicons.org/wordpress' },
        ].map((tech) => (
          <TechItem key={tech.name}> 
            <TechLogo src={tech.src} alt={tech.name} onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGrid>
    </TechSection>
  </Section>
);

export default Skills;