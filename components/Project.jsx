import style from '../styles/Project.module.scss';
import Badge from './Badge';

const Project = ({ title, type, body, url, bg, badge }) => {
  const { card, card__img, card__content, card__lang, img, audiservicios } =
    style;

  return (
    <article className={card}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <div className={card__img}>
          <div className={`${img} ${bg}`}></div>
        </div>
      </a>
      <div className={card__content}>
        <p>{type}</p>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={card__lang}>
          {badge.map(({ text, color, logo, width }) => (
            <Badge
              key={text}
              name={text}
              logo={logo}
              color={color}
              fontColor="white"
              alt={text}
              width={width}
              height="20"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
