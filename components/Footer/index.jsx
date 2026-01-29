import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Icons (instala react-icons: npm install react-icons)
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaHeart,
  FaCode,
  FaEnvelope
} from 'react-icons/fa';

//hooks
import { useClickBoard } from '../../hooks/useClickBoard';

//styles
import { 
  FooterStyled, 
  Content, 
  FooterLinks, 
  SocialLinks, 
  SocialLink,
  FooterLink,
  Copyright,
  HeartIcon,
  Strong 
} from './styles';

const Footer = () => {
  const YEAR_NOW = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <FooterStyled>
      <motion.div 
        className="space-lateral"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Content>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built with <HeartIcon>❤️</HeartIcon> by <Strong>Dioverdm</Strong>
          </motion.p>
          
          <FooterLinks>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </motion.div>
          </FooterLinks>
          
          <SocialLinks>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '15px' }}
            >
              <SocialLink 
                href="https://github.com/dioverdm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink 
                href="https://linkedin.com/in/dioverdm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink 
                href="https://twitter.com/dioverdm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </SocialLink>
              
              <SocialLink 
                href="mailto:tu@email.com"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </SocialLink>
            </motion.div>
          </SocialLinks>
        </Content>
        
        <Copyright
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            © {YEAR_NOW} DioverDM. All rights reserved. 
            <span style={{ marginLeft: '10px', opacity: 0.6 }}>
              Crafted with passion and modern tech
            </span>
          </p>
        </Copyright>
      </motion.div>
      
      {/* Efecto de partículas interactivas */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 120, 255, 0.05) 0%, transparent 50%)`
      }} />
    </FooterStyled>
  );
};

export default Footer;