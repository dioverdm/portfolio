import style from '../styles/About.module.scss';
import Image from 'next/image';

const About = () => {
  const { about, about__container, about__left, social__media, about__right, bg__img } =
    style;
  return (
    <section className={about} id="about">
      <div className={`${about__container} space-lateral`}>
        <div className={about__left}>
          <div className={bg__img}></div>
          <Image
            src="/image/jose-manuel.png"
            height="150px"
            width="150px"
            alt="foto de Jose Manuel Montaño Sáenz"
            className="img"
          />
          <div className={social__media}>
            <a
              href="https://www.linkedin.com/in/mooenz"
              title="Linkedin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/MooenzDev"
              title="Twitter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Mooenz"
              title="Github"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </div>
        </div>

        <div className={about__right}>
          <h2>Sobre mí</h2>
          <p>
            <b>Soy maqueteador web</b> en constante aprendizaje para lograr un
            puesto como Front-end.
          </p>
          <p>
            Me interesan tecnologias como React o Vue.js. Busco un lugar ameno
            donde me permitan seguir creciendo como Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
