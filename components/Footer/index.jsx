import style from './Footer.module.scss';
import { useClickBoard } from '../../hooks/useClickBoard';

const Footer = () => {
  const { footer, footer__content, strong } = style;
  const YEAR_NOW = new Date().getFullYear();

  return (
    <footer className={footer}>
      <div className={`${footer__content} space-lateral`}>
        <p>
          Trabajemos juntos{' '}
          <span
            className={strong}
            title="joss92821@hotmail.com"
            onClick={() => useClickBoard()}
          >
            Contácteme aquí
          </span>
        </p>
        <p>Copyright © 1992 - {YEAR_NOW}</p>
        <p>Con 🖤 Mooenz</p>
      </div>
    </footer>
  );
};

export default Footer;
