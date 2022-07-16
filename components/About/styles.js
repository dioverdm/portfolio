import styled from 'styled-components';
import Theme from '../../constant/uiTheme';
import Image from 'next/image';

const { white, black, blackIntense, blackLight, redCherry, gray } = Theme;

export const AboutStyle = styled.section`
  background-color: ${blackIntense};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.section`
  display: grid;
  gap: 32px;
  width: 100%;
  padding: 70px 24px;
  background-color: ${black};
  border-radius: 10px;
  border: 1px solid ${blackLight};
  transition-duration: 0.5s;
  margin: 70px 0;

  @media screen and (min-width: 790px) {
    width: 1200px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 1220px) {
    padding: 70px 32px;
  }
`;

export const ImageContainer = styled.section`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  place-content: center;
`;

export const CircleImage = styled.section`
  padding: 15px;
  border: 3px solid ${white};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${blackIntense};
`;

export const BgImage = styled.div`
  background: linear-gradient(180deg, ${white} 0%, ${blackIntense} 80%);
  width: 250px;
  height: 250px;
  border-radius: 50%;

  @media screen and (min-width: 1220px) {
    width: 300px;
    height: 300px;
  }
`;

export const SocialMedia = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin: 32px 0 0;

  @media screen and (min-width: 1220px) {
    gap: 35px;
    margin: 40px 0 0;
  }
`;

export const ImageStyle = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  width: 250px;
  height: 250px;

  @media screen and (min-width: 1220px) {
    width: 300px;
    height: 300px;
  }
`;

export const AboutStyleMe = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 4rem;
  margin: 0 0 24px;
`;

export const Taplist = styled.ul`
  font-size: 2rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 16px;
  margin: 0 0 32px;
  width: 100%;

  @media screen and (min-width: 790px) {
    display: flex;
    font-size: 2rem;
  }
`;

export const Tap = styled.li`
  padding: 8px 0;
  cursor: pointer;
  border: 2px solid transparent;
  text-align: center;
  position: relative;
  color: ${({ tapState, tapTitle }) =>
    tapState === tapTitle ? redCherry : white};

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ tapState, tapTitle }) =>
      tapState === tapTitle ? redCherry : 'transparent'};
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  &:hover {
    color: ${redCherry};
  }

  @media screen and (min-width: 790px) {
    padding: 8px 16px;
  }
`;

export const Body = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  color: ${gray};
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: ${({ margin }) => (margin ? '0 0 50px' : '0 0 24px')};
`;

export const Strong = styled.span`
  font-weight: 700;
  color: ${white};
`;

export const BtnDownload = styled.div`
  position: relative;
  width: 250px;
  margin: 32px 0 0;
  padding: 25px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 20px -7px ${blackLight};
  cursor: pointer;
  color: ${white};
  font-size: 2rem;
  font-weight: 700;
  background-color: ${redCherry};
  transition: 0.5s;

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: 0 0 30px -7px ${redCherry};
  }
`;
