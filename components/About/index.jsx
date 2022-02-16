import Image from 'next/image';
import { useState } from 'react';

//Components
import StudyList from '../StudyList';
import Skills from '../Skills';
import SocialMedia from '../SocialMedia';

//styles
import style from './About.module.scss';

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
    <section className={about} id="about">
      <div className={`${about__container} space-lateral`}>
        <div className={about__image}>
          <div className={avatar}>
            <Image
              src="/image/jose-manuel.png"
              height="200px"
              width="200px"
              alt="foto de Jose Manuel Montaño Sáenz"
              className={img}
            />
          </div>
          <SocialMedia />
        </div>

        <div className={about__me}>
          <h2 className={title}>Sobre mí</h2>
          <ul className={tablist}>
            <li
              className={tapState === 1 ? `${tapActive} ${tap}` : tap}
              onClick={() => tapToggle(1)}
            >
              Perfil
            </li>
            <li
              className={tapState === 2 ? `${tapActive} ${tap}` : tap}
              onClick={() => tapToggle(2)}
            >
              Estudios
            </li>
            <li
              className={tapState === 3 ? `${tapActive} ${tap}` : tap}
              onClick={() => tapToggle(3)}
            >
              Skills
            </li>
          </ul>
          <div className={tapState === 1 ? `${body} ${bodyActive}` : body}>
            <p className={paragraph}>
              <span className={strong}>Soy maquetador web</span> en constante
              aprendizaje para lograr un puesto como Frontend. Me interesan
              tecnologías como React o Next js.
            </p>

            <p>
              Busco un lugar ameno donde me permitan seguir creciendo como
              Developer Frontend.
            </p>
            <button className={btnDownload}>
              <a href="/Cv-José-M-Montaño.pdf" download>
                Descargar CV
              </a>
            </button>
          </div>
          <div className={tapState === 2 ? `${body} ${bodyActive}` : body}>
            <StudyList />
          </div>
          <div className={tapState === 3 ? `${body} ${bodyActive}` : body}>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
