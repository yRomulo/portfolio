import styled from 'styled-components';
import { Github, ExternalLink, SmallButton as SmallBtnBase } from './container'; 
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  width: 100%;
  
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #111827;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0.3rem;
  &:hover {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
    transform: translateY(-4px);
    border-color: #667eea;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  flex-shrink: 0;
  background: #f0f0f0;
  border-radius: 1rem;
  overflow: hidden;
  @media(max-width: 768px) {
    width: 100%;
    height: 250px;
    border-radius: 1rem 1rem 0 0;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(102, 126, 234, 0);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  ${props => props.left ? 'left: 0.5rem;' : 'right: 0.5rem;'}

  &:hover {
    background: rgba(102, 126, 234, 0.49);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.3rem;
  z-index: 10;
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #667eea;
  background: ${props => props.active ? 'rgba(102, 126, 234, 0.35)' : 'rgba(255, 255, 255, 0.25)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.55);
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #111827;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const SmallButton = styled(SmallBtnBase)`
  margin-right: 0;
`;

const ProjectCard = ({ title, description, images, codeLink, liveLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CardContainer>
      <CarouselContainer>
        <CarouselImage
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={title}
        />
        {images.length > 1 && (
          <>
            <CarouselButton left onClick={handlePrevImage}>
              <ChevronLeft size={20} />
            </CarouselButton>
            <CarouselButton onClick={handleNextImage}>
              <ChevronRight size={20} />
            </CarouselButton>
            <CarouselIndicators>
              {images.map((_, index) => (
                <Indicator
                  key={index}
                  active={index === currentImageIndex}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </CarouselIndicators>
          </>
        )}
      </CarouselContainer>

      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <ButtonGroup>
          {codeLink && (
            <SmallButton onClick={() => window.open(codeLink, '_blank')}>
              <Github size={16} />
              Código
            </SmallButton>
          )}
          {liveLink && (
            <SmallButton onClick={() => window.open(liveLink, '_blank')}>
              <ExternalLink size={16} />
              Link
            </SmallButton>
          )}
        </ButtonGroup>
      </CardContent>
    </CardContainer>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Click Financas',
      description: 'App para gerenciamento financeiro pessoal com análise de gastos e relatórios',
      images: [
        '/portfolio/click_financa_dash.png',
        '/portfolio/click_financa_categ.png',
        '/portfolio/click_financa_trans.png',
        '/portfolio/click_financa_relat.png'
      ],
      codeLink: 'https://github.com/yRomulo/click_financa.git',
      liveLink: null
    },
    {
      title: 'Click Agenda',
      description: 'Sistema de agendamento de horários com interface intuitiva e gerenciamento eficiente',
      images: [
        '/portfolio/click_agenda_dash.png',
        '/portfolio/click_agenda_login.png'
      ],
      codeLink: 'https://github.com/yRomulo/click_agenda',
      liveLink: 'https://clickagenda.vercel.app/login'
    }
  ];

  return (
    <Section id="projects">
      <SectionTitle>Projetos em Destaque</SectionTitle>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;