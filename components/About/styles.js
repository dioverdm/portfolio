import styled from 'styled-components';
import Theme from '../../constant/uiTheme';
import Image from 'next/image';

const { white, black, blackIntense, redCherry } = Theme;

export const AboutStyle = styled.section`
  background-color: ${black};
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.section`
  padding: 100px 0;
  display: grid;
  place-items: center;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 790px) {
    width: 1200px;
    margin: 100px auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    place-content: center;
    gap: 0;
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
`;

export const BgImage = styled.div`
  background-color: ${blackIntense};
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const SocialMedia = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin: 32px 0 0;
`;

export const ImageStyle = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 0 0 32px;

  @media screen and (min-width: 790px) {
    display: flex;
  }
`;

export const Tap = styled.li`
  padding: 8px 16px;
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
`;

export const Body = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  color: var(--gray);
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: ${({ margin }) => (margin ? '0 0 50px' : '0 0 24px')};
`;

export const Strong = styled.span`
  font-weight: 700;
  color: var(--withe);
`;

export const BtnDownload = styled.a`
  background-color: ${redCherry};
  color: var(--withe);
  font-size: 2rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  margin: 32px 0 0;

  &:hover {
    opacity: 0.9;
  }
`;
