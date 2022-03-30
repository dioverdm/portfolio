import { useState, useContext } from 'react';
import Link from 'next/link';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//hooks
import { useClickBoard } from '../../hooks/useClickBoard';
import useScrollBlock from '../../hooks/useScrollBlock';

//styles
import {
  Nav,
  Container,
  Logo,
  Burger,
  Bar,
  Links,
  Button,
  Tap,
} from './styles';

const Navbar = () => {
  //context ObserverContext
  const { activeTap } = useContext(ObserverContext);

  //hook useScrollBlock
  const [blockScroll, allowScroll] = useScrollBlock();

  //state
  //menu hamburger
  const [menuState, setMenuState] = useState(false);

  const changeIcon = () => {
    if (window.innerWidth < 790) {
      setMenuState(!menuState);
      menuState ? allowScroll() : blockScroll();
    }
  };

  return (
    <Nav blurActive={menuState}>
      <Container className="space-lateral">
        <Logo href="#" activeTap={activeTap} tapTitle="home">
          Mooenz
        </Logo>
        <Burger onClick={changeIcon}>
          <Bar transformOne={menuState} />
          <Bar opacityBar={menuState} />
          <Bar transformTwo={menuState} />
        </Burger>
        <Links showIcon={menuState}>
          <li>
            <Link href="#about">
              <Tap
                title="Inicio"
                onClick={changeIcon}
                activeTap={activeTap}
                tapTitle="about"
              >
                Sobre mí
              </Tap>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <Tap
                title="Portafolio"
                onClick={changeIcon}
                activeTap={activeTap}
                tapTitle="projects"
              >
                Portafolio
              </Tap>
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
