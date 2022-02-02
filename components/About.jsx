import style from '../styles/About.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
  const {
    about,
    about__container,
    about__image,
    avatar,
    img,
    social__media,
    icon,
    linkedin,
    twitter,
    github,
    about__me,
    title,
    tablist,
    body,
    strong,
    btnDownload,
  } = style;

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

          <div className={social__media}>
            <a
              href="https://www.linkedin.com/in/mooenz"
              title="Linkedin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={`${icon} ${linkedin}`}></span>
            </a>
            <a
              href="https://twitter.com/MooenzDev"
              title="Twitter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={`${icon} ${twitter}`}></span>
            </a>
            <a
              href="https://github.com/Mooenz"
              title="Github"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={`${icon} ${github}`}></span>
            </a>
          </div>
        </div>

        <div className={about__me}>
          <h2 className={title}>Sobre mí</h2>
          <ul className={tablist}>
            <li>Perfil</li>
            <li>Estudios</li>
            <li>Skills</li>
          </ul>
          <p className={body}>
            <span className={strong}>Soy maquetador web</span> en constante
            aprendizaje para lograr un puesto como Frontend. Me interesan
            tecnologías como React o Vue.js. Busco un lugar ameno donde me
            permitan seguir creciendo como Developer Frontend.
          </p>
          <a className={btnDownload} href="/Cv-José-M-Montaño.pdf" download>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
