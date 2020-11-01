import styled from "styled-components";

const Footer = () => {
  return (
    <AppFooter>
      <h1>I Will be a footer</h1>
    </AppFooter>
  );
};

const AppFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: #fff;
  text-transform: capitalize;
`;

export default Footer;
