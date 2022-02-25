//Styles
import { Icon } from './style';

const IconMedia = ({ url, title, bg }) => {
  return (
    <a href={ url }
      title={ title }
      target="_blank"
      rel="noreferrer noopener">
      <Icon bg={bg}/>
    </a>

  );
};

export default IconMedia;
