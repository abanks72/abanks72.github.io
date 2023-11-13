import React from 'react';
import './App.css';
import { Button, Container, Row, Card, CardText } from 'reactstrap';


function Profile() {
  return (
    <Container className='portfolio-wrapper'>
      <Container>
        <h1>About</h1>
        <Row>
          <Card body>
            <CardText>
              Hello!<br></br><br></br>
              I studied Computer Science, Information Technology, and Industrial and Organizational Psychology at University of Central Florida.<br></br>
              While my primary experience lies in Information Technology roles, I have also acquired self-taught proficiency in full-stack technologies.<br></br>
              Although I prefer to engage in server-side logic, I can entertain front-end development.<br></br> 
              Feel free to explore my projects, or reach out to me.<br></br><br></br>
              <p>I am willing to delve into any technology, if necessary, to achieve mastery.</p>
              Sincerely,<br></br>
              Sincere Banks<br></br><br></br>
              Programming Languages: <code>HTML, CSS, JavaScript, Python, C</code><br></br>
              Frameworks/Libraries: <code>Flask, React, Reactstrap/Bootstrap, Plotly, NetworkX, D3.js, Node.js</code><br></br>
              Additional Technologies: <code>Firebase/firestore(NoSQL), JSON, SQLite, npm, ServiceNow, Heroku, Git/Github</code><br></br>
            </CardText>
            <Button className='custom-button'>VIEW WORK</Button>
          </Card>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;
