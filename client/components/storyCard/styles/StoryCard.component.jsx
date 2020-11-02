import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Section}:last-of-type h2 {
      margin-bottom: 5rem;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: ${(props) => props.theme.white};
  overflow: hidden;
`;

export const Direction = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
