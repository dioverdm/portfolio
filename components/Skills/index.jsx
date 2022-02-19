// Constants
import data from '../../constant/skills.json';

//Styles
import { SkillsStyles, Body, Img, Name } from './styles';

const Skills = () => {
  return (
    <SkillsStyles>
      { data.map(({ name, icon, id }) => (
        <Body key={ id }>
          <Img src={ icon } />
          <Name>{ name }</Name>
        </Body>
      )) }
    </SkillsStyles>
  );
};

export default Skills;
