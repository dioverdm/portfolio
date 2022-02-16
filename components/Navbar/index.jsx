import Link from 'next/link';
import {Nav} from './Navbar';

//hooks
import { useClickBoard } from '../../hooks/useClickBoard';

//styles
import style from './Navbar.module.scss';

const Navbar = () => {
  const { nav, nav__container, menu, logo, nav__links, nav__burger, button } =
    style;

  return (
    <Nav>
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
    </Nav>
  );
};

export default Navbar;
