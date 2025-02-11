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
          With 🖤 <b>by Dioverdm</b>
        </p>
      </Content>
    </FooterStyled>
  );
};

export default Footer;
