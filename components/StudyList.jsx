import data from '../constant/study.json';
import styles from '../styles/StudyList.module.scss';

const StudyList = () => {
  const { section, title, body, strong, disapprove } = styles;

  return (
    <>
      <section className={section}>
        <h3 className={title}>En Proceso</h3>
        <ol>
          {data.map(
            ({ name, from, id, state }) =>
              !state && (
                <li key={id}>
                  <p className={body}>
                    {name} - <span className={strong}>{from}</span>
                  </p>
                </li>
              )
          )}
        </ol>
      </section>
      <section className={`${disapprove} ${section}`}>
        <h3 className={title}>Aprobados</h3>
        <ol>
          {data.map(
            ({ name, from, id, url, state }) =>
              state &&
              (!url ? (
                <li key={id}>
                  <p className={body}>
                    {name} - <span className={strong}>{from}</span>
                  </p>
                </li>
              ) : (
                <li key={id}>
                  <a href={url} target="blank_" rel="noreferrer">
                    <p className={body}>
                      {name} - <span className={strong}>{from}</span>
                    </p>
                  </a>
                </li>
              ))
          )}
        </ol>
      </section>
    </>
  );
};

export default StudyList;
