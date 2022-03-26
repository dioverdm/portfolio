import styled from 'styled-components';
import Theme from '../../constant/uiTheme';

const { black, blacLight, redCherry, white, gray } = Theme;

export const Card = styled.article`
  background-color: ${black};
  border-radius: 10px;
  box-shadow: 0px 10px 30px -7px rgba(34, 34, 34, 0.8);
  max-width: 380px;
  border: 1px solid ${blacLight};
  transition-duration: 0.5s;

  &:hover {
    border: 1px solid ${redCherry};
  }
`;

export const ImageContainer = styled.section`
  display: block;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  height: 200px;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${white};
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  transition-duration: 1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.section`
  padding: 40px 24px;
`;

export const Type = styled.p`
  color: ${redCherry};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const Body = styled.p`
  color: ${gray};
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin: 16px 0 20px;
  letter-spacing: 0.5px;
`;

export const Lang = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 1.5rem;
`;
