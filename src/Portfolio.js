import React, { useState } from 'react';
import { Button, Container, Row, Card, CardTitle, CardText } from 'reactstrap';
import './App.css';
import './Portfolio.css';


function Portfolio() {
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen(undefined); // Change to undefined when closing
    } else {
      setOpen(id);
    }
  };

  return (
    <Container className='portfolio-wrapper'>
      <Container>
        <h1>Most recent work</h1>
        <Row>
          <Card body>
            <CardTitle tag="h5">
              GeoChat 
            </CardTitle>
            <CardText className='text-1'>
              This React and Firebase-based web application enables users to register, log in, and select a city to engage in location-specific chat.<br></br><br></br>
              Technologies:<br></br><code>React, Reactstrap/Bootstrap HTML, CSS, JavaScript, Firebase/Firestore(NoSQL), Node.js, npm, Git/Github</code><br></br>
            </CardText>
            <Button className='custom-button' tag="a" href="https://github.com/abanks72/geochat" target="_blank" rel="noopener noreferrer">
              VIEW REPO
            </Button>
          </Card>
        </Row>
        <Row>
          <Card body>
            <CardTitle tag="h5">
              PhiloNet
            </CardTitle>
            <CardText className='text-1'>
              This Flask web app enables users to explore philosopher influence networks through a user interface and a JSON API, facilitating the study of historical philosophical connections.<br></br><br></br>     
              Technologies:<br></br><code>Flask, Python, HTML/Jinja2, JSON, Heroku, NetworkX, SQLite, Plotly, Git/Github</code><br></br>
            </CardText>
            <Button className='custom-button' tag="a" href="https://github.com/abanks72/philonet" target="_blank" rel="noopener noreferrer">
              VIEW REPO
            </Button>
          </Card>
        </Row>
      </Container>
    </Container>
  );
}



export default Portfolio;

