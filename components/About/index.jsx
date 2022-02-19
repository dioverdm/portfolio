import Image from 'next/image';
import { useState } from 'react';

//Components
import StudyList from '../StudyList';
import Skills from '../Skills';
import IconMedia from '../IconMedia';

//styles
import style from './About.module.scss';
import { AboutStyle, Container, ImageContainer, BgImage, SocialMedia, ImageStyle, AboutStyleMe, Title, Taplist, Tap, Paragraph, Body, Strong, BtnDownload } from './styles';

const About = () => {
  const {
    about,
    about__container,
    about__image,
    avatar,
    img,
    about__me,
    title,
    tablist,
    tap,
    tapActive,
    body,
    paragraph,
    bodyActive,
    strong,
    btnDownload,
  } = style;

  const [tapState, setTapState] = useState(1);

  const tapToggle = (id) => {
    setTapState(id);
  };

  return (
    <AboutStyle className='space-lateral' id="about">
      <Container>
        <ImageContainer>
          <BgImage>
            <ImageStyle
              src="/image/jose-manuel.png"
              height="200px"
              width="200px"
              alt="foto de Jose Manuel Montaño Sáenz"
            />
          </BgImage>

          <SocialMedia>
            <IconMedia url="https://www.linkedin.com/in/mooenz" title="Linkedin" bg="/icons/linkedin.svg"/>
            <IconMedia url="https://twitter.com/MooenzDev" title="Twitter" bg="/icons/twitter.svg" />
            <IconMedia url="https://github.com/Mooenz" title="Github" bg="/icons/github.svg" />
          </SocialMedia>
        </ImageContainer>

        <AboutStyleMe>
          <Title>Sobre mí</Title>
          <Taplist>
            <Tap
              className={ tapState === 1 ? `${tapActive} ${tap}` : tap }
              onClick={ () => tapToggle(1) }
            >
              Perfil
            </Tap>
            <Tap
              className={ tapState === 2 ? `${tapActive} ${tap}` : tap }
              onClick={ () => tapToggle(2) }
            >
              Estudios
            </Tap>
            <Tap
              className={ tapState === 3 ? `${tapActive} ${tap}` : tap }
              onClick={ () => tapToggle(3) }
            >
              Skills
            </Tap>
          </Taplist>
          <Body className={ tapState === 1 ? `${body} ${bodyActive}` : body }>
            <Paragraph>
              <Strong>Soy maquetador web</Strong> en constante
              aprendizaje para lograr un puesto como Frontend. Me interesan
              tecnologías como React o Next js.
            </Paragraph>

            <p>
              Busco un lugar ameno donde me permitan seguir creciendo como
              Developer Frontend.
            </p>
            <BtnDownload>
              <a href="/Cv-José-M-Montaño.pdf" download>
                Descargar CV
              </a>
            </BtnDownload>
          </Body>
          <div className={ tapState === 2 ? `${body} ${bodyActive}` : body }>
            <StudyList />
          </div>
          <div className={ tapState === 3 ? `${body} ${bodyActive}` : body }>
            <Skills />
          </div>
        </AboutStyleMe>
      </Container>
    </AboutStyle>
  );
};

export default About;
