// Constants
import data from '../../constant/skills.json';

//Styles
import styles from './Skills.module.scss';

const Skills = () => {
  const { skills, skills__body, skills__name, skills__img } = styles;

  return (
    <ol className={skills}>
      {data.map(({ name, icon, id }) => (
        <li className={skills__body} key={id}>          
          <img className={skills__img} src={icon} />
          <p className={skills__name}>{name}</p>
        </li>
      ))}
    </ol>
  );
};

export default Skills;
