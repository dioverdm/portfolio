import { useFetch } from '../../hooks/useFetch';

//Components
import Project from '../Project';

//Styles
import { Proyects, Container, Title, ProyectsList } from './styles';

const Projects = ({data}) => {
  const datos = Object.values(useFetch('http://localhost:3000/api/data'));

  // console.log(data);

  return (
    <Proyects id="work">
      <Container className="space-lateral">
        <Title>Portafolio</Title>
        <ProyectsList>
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
        </ProyectsList>
      </Container>
    </Proyects>
  );
};

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await res.json();

//   console.log(data)

//   return {
//     props: {
//       data
//     },
//   };
// }

export default Projects;
