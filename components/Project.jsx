import style from '../styles/Project.module.scss';
import Badge from './Badge';

const Project = ({ title, type, body, url, bg, badge }) => {
  const {
    card,
    card__img,
    card__content,
    card__lang,
    img,
    card__title,
    card__body,
  } = style;

  return (
    <article className={card}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <div className={card__img}>
          <img className={img} src={bg ? bg : '/icons/default.svg'} />
        </div>
      </a>
      <div className={card__content}>
        <p>{type}</p>
        <h3 className={card__title}>{title}</h3>
        <p className={card__body}>{body}</p>
        <div className={card__lang}>
          {badge.map(({ text, color, logo, width, fontColor }) => (
            <Badge
              key={text}
              name={text}
              logo={logo}
              color={color}
              fontColor={fontColor}
              alt={text}
              width={width}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
