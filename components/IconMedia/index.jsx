//Styles
import { Icon } from './style';

const IconMedia = ({ url, title, bg }) => {
  return (
    <Icon href={ url }
      title={ title }
      target="_blank"
      rel="noreferrer noopener" 
      bg={bg}
      >      
    </Icon>
  );
};

export default IconMedia;
