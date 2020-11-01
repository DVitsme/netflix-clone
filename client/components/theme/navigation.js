import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavBar>
      <p>Im going to be</p>
      <p>The Nav</p>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default Navigation;
