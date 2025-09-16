import styled from 'styled-components';
import { Github, ExternalLink, SmallButton as SmallBtnBase } from './container'; 

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
  grid-template-columns: repeat(3, 1fr);

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
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

const SmallButton = styled(SmallBtnBase)`
  margin-right: 0.5rem;
`;

const Projects = () => (
  <Section id="projects">
    <SectionTitle>Projetos em Destaque</SectionTitle>
    <Grid>
      {/* Projeto 1 */}
      <CardContainer>
        <CardImage
          src="https://source.unsplash.com/400x250/?dashboard,ecommerce"
          alt="Projeto Plataforma E-commerce"
        />
        <CardHeader>
          <CardTitle>Plataforma E-commerce</CardTitle>
          <CardDescription>React, Node.js, PostgreSQL</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e análise de dados.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            <SmallButton onClick={() => window.open('https://github.com/usuario/projeto-ecommerce', '_blank')}>
              <Github size={16} />
              Código
            </SmallButton>
            <SmallButton onClick={() => window.open('https://demo.projeto-ecommerce.com', '_blank')}>
              <ExternalLink size={16} />
              Demo
            </SmallButton>
          </div>
        </CardContent>
      </CardContainer>

      {/* Projeto 2 */}
      <CardContainer>
        <CardImage
          src="https://source.unsplash.com/400x250/?app,finance"
          alt="Projeto App Financeiro"
        />
        <CardHeader>
          <CardTitle>App Financeiro</CardTitle>
          <CardDescription>React Native, Firebase</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Aplicativo móvel para controle financeiro pessoal com sincronização em tempo real e gráficos interativos.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            <SmallButton onClick={() => window.open('https://github.com/usuario/app-financeiro', '_blank')}>
              <Github size={16} />
              Código
            </SmallButton>
            <SmallButton onClick={() => window.open('https://play.google.com/store/apps/details?id=app.financeiro', '_blank')}>
              <ExternalLink size={16} />
              Demo
            </SmallButton>
          </div>
        </CardContent>
      </CardContainer>

      {/* Projeto 3 */}
      <CardContainer>
        <CardImage
          src="https://source.unsplash.com/400x250/?blog,website"
          alt="Projeto Blog Pessoal"
        />
        <CardHeader>
          <CardTitle>Blog Pessoal</CardTitle>
          <CardDescription>Gatsby, GraphQL</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Blog estático com conteúdo dinâmico, otimizado para SEO e carregamento rápido.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            <SmallButton onClick={() => window.open('https://github.com/usuario/blog-pessoal', '_blank')}>
              <Github size={16} />
              Código
            </SmallButton>
            <SmallButton onClick={() => window.open('https://blog.joaosilva.com', '_blank')}>
              <ExternalLink size={16} />
              Demo
            </SmallButton>
          </div>
        </CardContent>
      </CardContainer>
    </Grid>
  </Section>
);

export default Projects;