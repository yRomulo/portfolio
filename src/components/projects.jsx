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
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.08);
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

/* const CarouselContainer = styled.div`
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
  background: rgba(102, 126, 234, 0.35);
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
`; */

/* const CarouselIndicators = styled.div`
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
  display: inline-block;
  border-radius: 50%;
  background: ${props => props.active ? '#667eea' : '#9ca3af'};
  border: none;
  outline: ${props => props.active ? '1px solid #667eea' : 'none'};
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease, outline 0.18s ease;

  &:hover {
    background: #4f46e5;
    outline: 2px solid #667eea;
    transform: scale(1.15);
    }
    `; */
    
 const CarouselContainer = styled.div`
  position: relative;
  width: 500px;
  height: 320px;
  flex-shrink: 0;
  background: #f8f9fa;
  border-radius: 1rem;
  overflow: hidden;

  @media(max-width: 768px) {
    width: 100%;
    height: 220px;
    border-radius: 1rem 1rem 0 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;        /* ← esse era o problema, estava sem altura */
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  position: absolute;
  inset: 0;
  animation: carouselFadeIn 0.45s cubic-bezier(0.4, 0, 0.2, 1) both;

  @keyframes carouselFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;


// NOVO: botões mais elegantes com backdrop-blur
const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.35);
  border: 1.5px solid rgba(255, 255, 255, 0.4);  /* ← borda sutil ajuda em fundos claros */
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 10;
  filter: drop-shadow(0 1px 4px rgba(0,0,0,0.3));  /* ← sombra sutil que separa do fundo */

  ${props => props.left ? 'left: 0.6rem;' : 'right: 0.6rem;'}

  &:hover {
    background: rgba(0, 0, 0, 0.65);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

// NOVO: barra de progresso no lugar dos pontinhos
const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 3px;
  padding: 0 0.5rem 0.5rem;
  z-index: 10;
  background: linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 100%);
  padding-top: 1.5rem;
`;

const ProgressSegment = styled.button`
  flex: 1;
  height: 3px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  background: rgba(255, 255, 255, 0.35);
  position: relative;
  overflow: hidden;
  transition: transform 0.15s ease;

  &:hover {
    transform: scaleY(1.6);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffffff;
    border-radius: 2px;
    transform: scaleX(${props => props.active ? 1 : 0});
    transform-origin: left;
    transition: transform ${props => props.active ? '0.35s ease' : '0s'};
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
        <ImageWrapper>
          <CarouselImage
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${title} - imagem ${currentImageIndex + 1}`}
          />
        </ImageWrapper>

        {images.length > 1 && (
          <>
            <CarouselButton left onClick={handlePrevImage} aria-label="Imagem anterior">
              <ChevronLeft size={18} />
            </CarouselButton>
            <CarouselButton onClick={handleNextImage} aria-label="Próxima imagem">
              <ChevronRight size={18} />
            </CarouselButton>
            <ProgressBarContainer>
              {images.map((_, index) => (
                <ProgressSegment
                  key={index}
                  active={index === currentImageIndex}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </ProgressBarContainer>
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
      description: 'Aplicação full stack de controle financeiro pessoal. Frontend em React com Zustand, Recharts e Axios; backend em Node.js/Express com JWT, bcryptjs e PostgreSQL. Containerizado com Docker e com API REST para transações, categorias e relatórios.',
      images: [
        '/portfolio/click_financa/click_financa_dash.png',
        '/portfolio/click_financa/click_financa_categ.png',
        '/portfolio/click_financa/click_financa_trans.png',
        '/portfolio/click_financa/click_financa_relat.png'
      ],
      codeLink: 'https://github.com/yRomulo/click_financa.git',
      liveLink: null
    },
    {
      title: 'Astro Call',
      description: 'Aplicação full stack para gerenciamento de chamadas. Frontend em Next.js/React/TypeScript, backend em Node.js/Express com JWT, bcrypt e SQLite. Deploy na Vercel (frontend) e Render (backend).',
      images: [
        '/portfolio/astro_call/home.png',
        '/portfolio/astro_call/dashboard.png',
        '/portfolio/astro_call/adminPage.png',
        '/portfolio/astro_call/editProfile.png',
        '/portfolio/astro_call/call.png',
        '/portfolio/astro_call/submit.png',
      ],
      codeLink: 'https://github.com/yRomulo/AstroCall'
    },
    {
      title: 'Click Agenda',
      description: 'Aplicação full stack de gerenciamento de agendamentos. Frontend em Next.js/React/TypeScript, backend em Node.js/Express com JWT, bcrypt e SQLite. Deploy na Vercel (frontend) e Render (backend).',
      images: [
        '/portfolio/click_agenda/click_agenda_dash.png',
        '/portfolio/click_agenda/click_agenda_login.png'
      ],
      codeLink: 'https://github.com/yRomulo/click_agenda',
      liveLink: 'https://clickagenda.vercel.app/login'
    },
    {
      title: 'API projects',
      description: 'API RESTful em Node.js, Express e TypeScript com arquitetura em camadas (Controller → Service → DTO → Prisma). Autenticação JWT, documentação via Swagger, persistência com Prisma ORM + PostgreSQL e containerização com Docker.',
      images: [
        '/portfolio/api_projects/swagger_dashboard.png',
        '/portfolio/api_projects/swagger_schemas.png',
      ],
      codeLink: 'https://github.com/yRomulo/APIprojects'
    },
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