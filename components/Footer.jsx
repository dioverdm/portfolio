import style from '../styles/Footer.module.scss';

const YEAR_NOW = new Date().getFullYear();

const Footer = () => {
  const { footer, footer__content } = style;
  return (
    <footer className={footer}>
      <div className={`${footer__content} space-lateral`}>
        <p>
          Trabajemos juntos {}
          <a href="mailto:joss92821@hotmail.com">
            <b>Contáctame aquí</b>
          </a>
        </p>
        <p>
          Copyright © 1992-
          <span>{YEAR_NOW}</span>
        </p>
        <p>Con 🖤 Mooenz</p>
      </div>
    </footer>
  );
};

export default Footer;
