//Components
import Project from '../Project';

//Data
import data from '../../constant/projects.json';

//Styles
import { ProjectsStyle, Container, Title, ProjectsList } from './styles';

const Projects = () => {
  return (
    <ProjectsStyle id="projects">
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
