import style from '../styles/SocialMedia.module.scss';

const SocialMedia = () => {
  const { social__media, icon, linkedin, twitter, github } = style;
  
  return (
    <div className={social__media}>
      <a
        href="https://www.linkedin.com/in/mooenz"
        title="Linkedin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={`${icon} ${linkedin}`}></span>
      </a>
      <a
        href="https://twitter.com/MooenzDev"
        title="Twitter"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={`${icon} ${twitter}`}></span>
      </a>
      <a
        href="https://github.com/Mooenz"
        title="Github"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={`${icon} ${github}`}></span>
      </a>
    </div>
  );
};

export default SocialMedia;
