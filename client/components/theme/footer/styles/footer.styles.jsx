import styled from "styled-components";
import { default as NextJsLink } from "next/link";

export const Container = styled.section`
  @media (max-width: 1000px) {
    padding: 7rem 3rem;
  }
  display: flex;
  padding: 7rem 5.6rem;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 15px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textFaded};
  margin-bottom: 2rem;
  font-size: 13px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme.textFaded};
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.textFaded};
  margin-bottom: 4rem;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
