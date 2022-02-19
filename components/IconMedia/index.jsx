//Styles
import style from './SocialMedia.module.scss';
import { Icon, Linkedin, Twitter, Github } from './style';

const IconMedia = ({ url, title }) => {
  return (
    <Icon
      href={ url }
      title={ title }
      target="_blank"
      rel="noreferrer noopener"
    >
    </Icon>
  );
};

export default IconMedia;
