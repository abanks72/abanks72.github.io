import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import StyledBurger from './StyledBurger';

function CustomNav({ open, setOpen }) {

  const Nav = styled.nav`
  `

  return (
    <Nav>
      <StyledBurger open={open} setOpen={setOpen} />
      <RightNav open={open} />
    </Nav>
  );
}

export default CustomNav;