//hooks
import { useClickBoard } from '../../hooks/useClickBoard';

//styles
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
        <p>Copyright © 1992 - {YEAR_NOW}</p>
        <p>Con 🖤 Mooenz</p>
      </Content>
    </FooterStyled>
  );
};

export default Footer;
