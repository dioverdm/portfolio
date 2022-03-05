import Link from 'next/dist/client/link';

//Styles
import { Header, Title, Container, Arrow } from './styles'

const header = () => {
  return (
    <Header className="space-lateral">
      <div>
        <Title>José M Montaño</Title>
      </div>
      <Link rel="stylesheet" href="#about">
        <Container>
          <Arrow></Arrow>
        </Container>
      </Link>
    </Header>
  );
};

export default header;
