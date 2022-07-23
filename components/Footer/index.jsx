//hooks
import { useClickBoard } from '../../hooks/useClickBoard';

//styles
import { FooterStyled, Content, Strong } from './styles';

const Footer = () => {
  const YEAR_NOW = new Date().getFullYear();

  return (
    <FooterStyled>
      <Content className="space-lateral">
        <p>
          Trabajemos juntos{' '}
          <Strong title="joss92821@hotmail.com" onClick={() => useClickBoard()}>
            Contácteme aquí
          </Strong>
        </p>
        
        <p>
          Con 🖤 <b>Mooenz</b>
        </p>
      </Content>
    </FooterStyled>
  );
};

export default Footer;
