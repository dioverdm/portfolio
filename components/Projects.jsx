import { useFetch } from '../hooks/useFetch';
import Project from './Project';
import style from '../styles/Projects.module.scss';

const Projects = () => {
  const { work, work__container, work__content, work__projects } = style;

  const datos = Object.values(useFetch());

  return (
    <div>
      <section className={work} id="work">
        <div className={`${work__container} space-lateral`}>
          <div className={work__content}>
            <h2>Portafolio</h2>
          </div>
          <div className={work__projects}>
            {datos.map(({ title, type, body, url, bg, badge, key }) => (
              <Project
                key={key}
                title={title}
                type={type}
                body={body}
                url={url}
                bg={bg}
                badge={Object.values(badge)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
