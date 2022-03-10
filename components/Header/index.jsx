//Styles
import { Header, Title, Container, Arrow } from './styles';

const header = () => {
  return (
    <Header className="space-lateral">
      <div>
        <Title>José M Montaño</Title>
      </div>
      <Arrow href="#about" title="¿Quieres contratarme?, te invito a conocerme">
        <Container />
      </Arrow>
    </Header>
  );
};

export default header;
