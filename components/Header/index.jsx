import { useEffect, useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//Styles
import { 
  Header, 
  Title, 
  H2, 
  Container, 
  Arrow,
  FloatingParticles,
  Particle,
  GlowingOrb,
  CodeTag
} from './styles';

const HeaderComponent = () => {
  //Observer
  const { setActiveTap } = useContext(ObserverContext);
  const [particles, setParticles] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    // Crear partículas aleatorias
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 3 + 1}px`,
          duration: `${Math.random() * 10 + 15}s`,
          delay: `${Math.random() * 5}s`
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    if (inView) {
      setActiveTap('home');
    }
  }, [inView, setActiveTap]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <Header className="space-lateral" ref={ref} id="home">
      {/* Orbes flotantes con gradiente */}
      <GlowingOrb />
      <GlowingOrb />
      
      {/* Partículas flotantes */}
      <FloatingParticles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            top={particle.top}
            left={particle.left}
            size={particle.size}
            duration={particle.duration}
            delay={particle.delay}
          />
        ))}
      </FloatingParticles>
      
      {/* Etiqueta de código */}
      <CodeTag>Frontend & Backend Developer</CodeTag>
      
      {/* Contenido principal con animaciones */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <motion.div variants={textVariants}>
          <Title 
            title='Hello, my name is Diover Rivero and I am a frontend and backend developer.'
            as={motion.h1}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Diover Rivero
          </Title>
        </motion.div>
        
        <motion.div variants={textVariants}>
          <H2
            as={motion.h2}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Full Stack Developer
          </H2>
        </motion.div>
      </motion.div>
      
      {/* Flecha animada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Arrow 
          href="#about" 
          title="Do you want to hire me? I invite you to meet me"
          as={motion.a}
          variants={arrowVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Container />
        </Arrow>
      </motion.div>
      
      {/* Indicador de scroll */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '20px',
            height: '30px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px'
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '2px'
            }}
          />
        </motion.div>
      </motion.div>
    </Header>
  );
};

export default HeaderComponent;