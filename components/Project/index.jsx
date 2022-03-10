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
  return (
    <Card>
      <a href={url} target="_blank" rel="noreferrer noopener" title={title}>
        <ImageContainer>
          <Img
            src={bg ? bg : '/icons/default.webp'}
            alt={title}
            width={300}
            height={300}
          />
        </ImageContainer>
      </a>
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
    </Card>
  );
};

export default Project;
