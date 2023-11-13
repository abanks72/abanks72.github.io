import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RightNav({ open }) {
  const Ul = styled.nav`
    color: white;
    list-style: none;
    flex-flow: column nowrap;
    padding: 25px;
    background-color: #202433;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 150px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 2s ease-in-out;
    border-left: 1px solid red;
    text-align: right;
    margin-top: 5px;

    li {
      margin-top: 10px;
      border-bottom: 1px solid red;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: white;
    }
  `;

  return (
    <Ul open={open}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><a href="mailto:abanks7296@gmail.com">Contact</a></li>
    </Ul>
  );
}

export default RightNav;
