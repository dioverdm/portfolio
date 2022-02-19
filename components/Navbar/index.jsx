import Link from 'next/link';

//hooks
import { useClickBoard } from '../../hooks/useClickBoard';

//styles
import { Nav, Container, Logo, Menu, Burger, Links, Button } from './styles';


const Navbar = () => {

  return (
    <Nav>
      <Container className='space-lateral'>
        <Logo href="#home">
          Mooenz
        </Logo>
        <Menu>
          <Burger></Burger>
          <Links>
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
              <Button
                title="joss92821@hotmail.com"
                onClick={ () => useClickBoard() }
              >
                Contactarme
              </Button>
            </li>
          </Links>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;
