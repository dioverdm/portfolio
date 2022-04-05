import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

//ObserverContext
import { ObserverContext } from '../../context/ObserverContext';

//Component
import Badge from '../Badge';

//Styles
import {
  Card,
  ImageContainer,
  Img,
  CardContent,
  Type,
  Title,
  Body,
  Lang,
} from './styles';

const Project = ({ title, type, body, url, bg, badge }) => {
  //Observer
  const { setActiveTap } = useContext(ObserverContext);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    return () => {
      setActiveTap('projects');
    };
  }, [inView]);

  return (
    <Card ref={ref}>
      <a href={url} target="_blank" rel="noreferrer noopener" title={title}>
        <ImageContainer>
          <Img
            src={bg ? bg : '/icons/default.webp'}
            alt={title}
            width={300}
            height={300}
          />
        </ImageContainer>

        <CardContent>
          <Type>{type}</Type>
          <Title>{title}</Title>
          <Body>{body}</Body>
          <Lang>
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
          </Lang>
        </CardContent>
      </a>
    </Card>
  );
};

export default Project;
