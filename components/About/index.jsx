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
  CircleImage,
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
          <CircleImage>
            <BgImage>
              <ImageStyle
                src="/image/jose-manuel.webp"
                height={300}
                width={300}
                alt="foto de Jose Manuel Montaño Sáenz"
              />
            </BgImage>
          </CircleImage>

          <SocialMedia>
            <IconMedia
              url="https://www.linkedin.com/in/mooenz"
              title="Linkedin"
              bg="/icons/linkedin.svg"
            />
            <IconMedia
              url="https://twitter.com/MooenzDev"
              title="Twitter"
              bg="/icons/twitter.svg"
            />
            <IconMedia
              url="https://github.com/Mooenz"
              title="Github"
              bg="/icons/github.svg"
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
                <Strong>Desarrollador web</Strong> con 2 años de experiencia. En mi día a día trabajo mancomunadamente con el area de diseño para crear paginas web atractivas y funcionales.
                </Paragraph>

                <Paragraph margin="50px">
                  Me gustaría trabajar como frontend developer en react.js o vue.js, aunque, estoy dispuesto a aprender cualquier tecnología que me permita crecer como profesional.
                </Paragraph>

                <BtnDownload>
                  <a href="/Cv-José-M-Montaño.pdf" download>
                    <div>
                      <p>Curriculum</p>
                      <span></span>
                    </div>
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
