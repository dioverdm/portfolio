import { useState } from 'react';
import Link from 'next/link';

//hooks
import { useClickBoard } from '../../hooks/useClickBoard';
import useScrollBlock from '../../hooks/useScrollBlock';

//styles
import { Nav, Container, Logo, Burger, Bar, Links, Button } from './styles';

const Navbar = () => {
  const [blockScroll, allowScroll] = useScrollBlock();

  const [menuState, setMenuState] = useState(false);

  const changeIcon = () => {
    if(window.innerWidth < 790) {
      setMenuState(!menuState);
      menuState ? allowScroll() : blockScroll();
    }
  };

  return (
    <Nav blurActive={menuState}>
      <Container className="space-lateral">
        <Logo href="#">Mooenz</Logo>
        <Burger onClick={changeIcon}>
          <Bar transformOne={menuState} />
          <Bar opacityBar={menuState} />
          <Bar transformTwo={menuState} />
        </Burger>
        <Links showIcon={menuState}>
          <li>
            <Link href="#about">
              <a title="Inicio" onClick={changeIcon}>
                Sobre mí
              </a>
            </Link>
          </li>
          <li>
            <Link href="#work">
              <a title="Portafolio" onClick={changeIcon}>
                Portafolio
              </a>
            </Link>
          </li>
          <li>
            <Button
              title="joss92821@hotmail.com"
              onClick={() => useClickBoard()}
            >
              Contactarme
            </Button>
          </li>
        </Links>
      </Container>
    </Nav>
  );
};

export default Navbar;
