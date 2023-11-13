// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Row, NavbarToggler, Collapse } from 'reactstrap';
import Home from './Home';
import Profile from './Profile';
import Portfolio from './Portfolio';
import CustomNav from './CustomNav';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Container fluid className='app-wrapper'>
        <Row className='first-row'>
          <CustomNav />
          <Navbar light expand='md'>
            <Container>
              <NavbarToggler onClick={toggleNavbar} style={{ borderColor: 'white' }} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <Button className='custom-button' tag={Link} to="/">
                    Home
                  </Button>
                  <Button className='custom-button' tag={Link} to="/portfolio">
                    Portfolio
                  </Button>
                  <Button className='custom-button' tag={Link} to="/profile">
                    Profile
                  </Button>
                  <Button className='custom-button' href="mailto:abanks7296@gmail.com">
                    Contact
                  </Button>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </Row>
        <Row className='second-row align-items-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/profile/*" element={<Profile />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
