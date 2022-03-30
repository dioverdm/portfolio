import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//Components
import Project from '../Project';

//Data
import data from '../../constant/projects.json';

//Styles
import { ProjectsStyle, Container, Title, ProjectsList } from './styles';

const Projects = () => {
  //Observer
  const { setActiveTap } = useContext(ObserverContext);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    return () => {
      setActiveTap('projects');
    };
  }, [inView]);

  return (
    <ProjectsStyle id="projects" ref={ref}>
      <Container className="space-lateral">
        <Title>Portafolio</Title>
        <ProjectsList>
          {data.map(({ title, type, body, url, bg, badge, key }) => (
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
        </ProjectsList>
      </Container>
    </ProjectsStyle>
  );
};

export default Projects;
