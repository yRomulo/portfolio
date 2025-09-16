import styled from 'styled-components';
import { Button } from './container';

const HeroSection = styled.section`
  padding: 8rem 1rem 5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  object-fit: cover;
  margin: 0 auto 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #374151;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Hero = () => (
  <HeroSection>
    <HeroImage
      src={`${import.meta.env.BASE_URL}foto.jpeg`}
      alt="Foto profissional de Rômulo Dias"
    />
    <HeroTitle>Rômulo Dias</HeroTitle>
    <HeroSubtitle>Desenvolvedor Full Stack</HeroSubtitle>
    <HeroDescription>
      Estudante dedicado, focado em aprender e crescer na área de desenvolvimento de software.
    </HeroDescription>
    <HeroButtons>
      <Button onClick={() => window.location.href = '#projects'}>Ver Projetos</Button>
      <a href="/curriculo.pdf" download>
        <Button variant='outline'>Baixar Currículo</Button>
      </a>
    </HeroButtons>
  </HeroSection>
);

export default Hero;