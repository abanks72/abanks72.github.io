import React, { useState } from 'react';
import RightNav from './RightNav';
import styled from 'styled-components';

const StyledBurgerWrapper = styled.nav`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 999;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'white' : 'white')};
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')}; // Fix rotate angle
    }
  }
`;

function StyledBurger() {
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <StyledBurgerWrapper open={open} onClick={handleToggle}>
          <div />
          <div />
          <div />
        </StyledBurgerWrapper>
        <RightNav open={open} onClose={handleClose} />
      </>
    );
  }
  
  export default StyledBurger;
  
  
  
  
