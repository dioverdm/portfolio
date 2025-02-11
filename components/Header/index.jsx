import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//Styles
import { Header, Title, H2, Container, Arrow } from './styles';

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
    <Header className="space-lateral" ref={ ref }>
      <div>
        <Title title='Hello, my name is Diover Rivero and I am a frontend and backend developer.'>Diover Rivero</Title>
        <H2>Frontend Developer</H2>
      </div>
      <Arrow href="#about" title="Do you want to hire me? I invite you to meet me">
        <Container />
      </Arrow>
    </Header>
  );
};

export default header;
