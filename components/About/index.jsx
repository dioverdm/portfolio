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
    <AboutStyle className="space-lateral" id="about" ref={ ref }>
      <Container>
        <ImageContainer>
          <CircleImage>
            <BgImage>
              <ImageStyle
                src="/image/foto_perfil.jpg"
                height={ 300 }
                width={ 300 }
                alt="Photo by Diover Rivero (DioverDM)"
                priority={true}
              />
            </BgImage>
          </CircleImage>

          <SocialMedia>
            <IconMedia
              url="https://www.linkedin.com/in/dioverdm"
              title="Linkedin"
              bg="/icons/linkedin.svg"
            />
            <IconMedia
              url="https://threads.net/@dioverdm"
              title="Threads"
              bg="/icons/threads.svg"
            />
            <IconMedia
              url="https://github.com/dioverdm"
              title="Github"
              bg="/icons/github.svg"
            />
          </SocialMedia>
        </ImageContainer>

        <AboutStyleMe>
          <Title>About me</Title>
          <Taplist>
            <Tap
              tapTitle="Perfil"
              tapState={ tapState }
              onClick={ () => tapToggle('Perfil') }
            >
              Profile
            </Tap>
            <Tap
              tapTitle="Estudios"
              tapState={ tapState }
              onClick={ () => tapToggle('Estudios') }
            >
              Studies
            </Tap>
            <Tap
              tapTitle="Skills"
              tapState={ tapState }
              onClick={ () => tapToggle('Skills') }
            >
              Skills
            </Tap>
          </Taplist>
          <Body>
            { tapState === 'Perfil' && (
              <>
                <Paragraph>
                  <Strong>Web Developer</Strong> With more than 2 years of experience, I usually work with the design area to create attractive and functional web pages.
                </Paragraph>

                <Paragraph margin="50px">
                  I like web development, video games, sports and animals. My current hobbies are sports, music and development. My goals are to master JavaScript with CSS to the maximum and continue learning more about Front-End technologies.
                </Paragraph>

                <BtnDownload>
                  <a href="/Cv-José-M-Montaño.pdf" download>
                    Download CV
                    <span></span>
                  </a>
                </BtnDownload>
              </>
            ) }
            { tapState === 'Estudios' && <StudyList /> }
            { tapState === 'Skills' && <Skills /> }
          </Body>
        </AboutStyleMe>
      </Container>
    </AboutStyle>
  );
};

export default About;
