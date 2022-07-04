import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//Styles
import { Header, Title, Container, Arrow } from './styles';

const header = () => {
  //Observer
  const { setActiveTap } = useContext(ObserverContext);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    return () => {
      setActiveTap('home');
    };
  }, [inView]);

  return (
    <Header className="space-lateral" ref={ref}>
      <div>
        <Title title='Hola me llamo Jose Manuel Montaño Saenz y soy Maquetador Web'>José M Montaño</Title>
      </div>
      <Arrow href="#about" title="¿Quieres contratarme?, te invito a conocerme">
        <Container />
      </Arrow>
    </Header>
  );
};

export default header;
