import { useEffect, useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

//components
import StudyList from '../StudyList';
import Skills from '../Skills';
import IconMedia from '../IconMedia';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//styles
import {
  AboutStyle,
  Container,
  ImageContainer,
  BgImage,
  SocialMedia,
  ImageStyle,
  AboutStyleMe,
  Title,
  Taplist,
  Tap,
  Paragraph,
  Body,
  Strong,
  BtnDownload,
} from './styles';

const About = () => {
  //observer
  const { setActiveTap } = useContext(ObserverContext);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    return () => {
      setActiveTap('about');
    };
  }, [inView]);

  //State Tap
  const [tapState, setTapState] = useState('Perfil');

  const tapToggle = (nameActive) => {
    setTapState(nameActive);
  };

  return (
    <AboutStyle className="space-lateral" id="about" ref={ref}>
      <Container>
        <ImageContainer>
          <BgImage>
            <ImageStyle
              src="/image/jose-manuel.webp"
              height={300}
              width={300}
              alt="foto de Jose Manuel Montaño Sáenz"
            />
          </BgImage>

          <SocialMedia>
            <IconMedia
              url="https://www.linkedin.com/in/mooenz"
              title="Linkedin"
              bg="/icons/linkedin.webp"
            />
            <IconMedia
              url="https://twitter.com/MooenzDev"
              title="Twitter"
              bg="/icons/twitter.webp"
            />
            <IconMedia
              url="https://github.com/Mooenz"
              title="Github"
              bg="/icons/github.webp"
            />
          </SocialMedia>
        </ImageContainer>

        <AboutStyleMe>
          <Title>Sobre mí</Title>
          <Taplist>
            <Tap
              tapTitle="Perfil"
              tapState={tapState}
              onClick={() => tapToggle('Perfil')}
            >
              Perfil
            </Tap>
            <Tap
              tapTitle="Estudios"
              tapState={tapState}
              onClick={() => tapToggle('Estudios')}
            >
              Estudios
            </Tap>
            <Tap
              tapTitle="Skills"
              tapState={tapState}
              onClick={() => tapToggle('Skills')}
            >
              Skills
            </Tap>
          </Taplist>
          <Body>
            {tapState === 'Perfil' && (
              <>
                <Paragraph>
                  <Strong>Maquetador Web</Strong> en constante aprendizaje para
                  lograr un puesto como Desarrollador Frontend. Me interesan
                  tecnologías como React o Next js.
                </Paragraph>
                <Paragraph margin="50px">
                  Busco un lugar ameno donde me permitan seguir creciendo como
                  Developer Frontend.
                </Paragraph>
                <BtnDownload>
                  <a href="/Cv-José-M-Montaño.pdf" download>
                    Descargar CV
                  </a>
                </BtnDownload>
              </>
            )}
            {tapState === 'Estudios' && <StudyList />}
            {tapState === 'Skills' && <Skills />}
          </Body>
        </AboutStyleMe>
      </Container>
    </AboutStyle>
  );
};

export default About;
