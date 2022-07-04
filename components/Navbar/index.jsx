import { useState, useContext } from 'react';

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
  Li,
  Tap,
  Button,
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
        <Logo href="#" activeTap={activeTap} tapTitle="home" title="inicio">
          Mooenz
        </Logo>
        <Burger onClick={changeIcon}>
          <Bar transformOne={menuState} />
          <Bar opacityBar={menuState} />
          <Bar transformTwo={menuState} />
        </Burger>
        <Links showIcon={menuState}>
          <Li activeTap={activeTap} tapTitle="about">
            <Tap
              href="#about"
              title="Sobre mí"
              onClick={changeIcon}
              activeTap={activeTap}
              tapTitle="about"
            >
              Sobre mí
            </Tap>
          </Li>
          <Li activeTap={activeTap} tapTitle="projects">
            <Tap
              href="#projects"
              title="Portafolio"
              onClick={changeIcon}
              activeTap={activeTap}
              tapTitle="projects"
            >
              Portafolio
            </Tap>
          </Li>
          <Li>
            <Button
              title="joss92821@hotmail.com"
              onClick={() => useClickBoard()}
            >
              Contactarme
            </Button>
          </Li>
        </Links>
      </Container>
    </Nav>
  );
};

export default Navbar;
