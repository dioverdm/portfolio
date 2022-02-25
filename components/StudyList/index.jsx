//Constants
import data from '../../constant/study.json';

//Styles
import { Section, Title, Body, Strong } from './styles';

const StudyList = () => {

  return (
    <>
      <Section>
        <Title>En Proceso</Title>
        <ol>
          {data.map(
            ({ name, from, id, state }) =>
              !state && (
                <li key={id}>
                  <Body>
                    {name} - <Strong>{from}</Strong>
                  </Body>
                </li>
              )
          )}
        </ol>
      </Section>
      <Section >
        <Title>Aprobados</Title>
        <ol>
          {data.map(
            ({ name, from, id, url, state }) =>
              state &&
              (!url ? (
                <li key={id}>
                  <Body>
                    {name} - <Strong>{from}</Strong>
                  </Body>
                </li>
              ) : (
                <li key={id}>
                  <a href={url} target="blank_" rel="noreferrer">
                    <Body>
                      {name} - <Strong>{from}</Strong>
                    </Body>
                  </a>
                </li>
              ))
          )}
        </ol>
      </Section>
    </>
  );
};

export default StudyList;
