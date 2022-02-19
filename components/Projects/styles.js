import styled from "styled-components";
import Theme from '../../constant/uiTheme';

const { blackIntense } = Theme;

export const Proyects = styled.section`
  background-color: ${blackIntense};
  padding: 100px 0;
`;

export const Container = styled.section`
@media screen and (min-width:1200px) {
  width: 1200px;
  margin: auto;
}
`;

export const Title = styled.h2`
  font-size: 4rem;
  margin: 0;
  text-align: center;
  margin: 0 0 50px;
  width: 100%;
`;

export const ProyectsList = styled.section`
  display: grid;
  grid-template-columns: auto;
  place-content: center;
  gap: 30px;

  @media screen and (min-width:790px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (min-width:1200px) {
    grid-template-columns: repeat(3, auto);
  }
`;