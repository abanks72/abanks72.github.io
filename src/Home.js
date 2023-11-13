import React from 'react';
import './App.css';
import './Home.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

function Home() {
  return (
    <Container className='home-wrapper'>
      <Container className='container-1'>
      <h1 className='header-1'>Sincere Banks,<br></br>Full-Stack Developer</h1>
        <p className='paragraph-1'>I'm actively seeking opportunities to collaborate with dynamic teams <br></br>and apply my full-stack expertise to create exceptional software.</p>
        <Button className='custom-button' tag={Link} to="/portfolio">
          VIEW PORTFOLIO
        </Button>
        <Button className='custom-button' tag={Link} to="/profile">
          VIEW PROFILE
        </Button>
      </Container>
    </Container>
  );
}

export default Home;