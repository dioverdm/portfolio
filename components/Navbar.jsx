import style from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useClickBoard } from '../hooks/useClickBoard';

const Navbar = () => {
  const { nav, nav__container, menu, logo, nav__links, nav__burger, button } =
    style;

  return (
    <div className={nav}>
      <nav className={`${nav__container} space-lateral`}>
        <span>
          <a className={logo} href="#home">
            Mooenz
          </a>
        </span>
        <div className={menu}>
          <span className={`${nav__burger}`}></span>
          <ul className={nav__links}>
            <li>
              <Link href="#about">
                <a title="Inicio">Sobre mí</a>
              </Link>
            </li>
            <li>
              <Link href="#work">
                <a title="Portafolio">Portafolio</a>
              </Link>
            </li>
            <li>
              <button
                className={button}
                title="joss92821@hotmail.com"
                onClick={() => useClickBoard()}
              >
                Contactarme
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
