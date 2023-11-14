// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Row, NavbarToggler, Collapse } from 'reactstrap';
import Home from './Home';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Row className='first-row'>
      <Sidebar />
      </Row>
      <Container fluid>
        <Row className='vh-100 align-items-center app-background'>
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
