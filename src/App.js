

import { Navbar,Nav, Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';

function App() {
  return (
    <div className="App">
     
        
       <Navbar bg="info" data-bs-theme="light">
        <Container >
          <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* cards */}
      <Container className = 'd-flex justify-content-around'>

        {/* card 1 */}
        <Card className = "mt-5 bglight.bg-body-tertiary" style={{ width: '16rem' }} >
          <Card.Img variant="top" src="./jsProg.png"style={{ minHeight: "16rem"}} />
          <Card.Body>
            <Card.Title>JavaScript Course </Card.Title>
            <Card.Text className= "text-body-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> 

        {/* card 2 */}
        <Card className = "mt-5 bg-body-tertiary" style={{ width: '16rem' }} >
          <Card.Img variant="top" src="./pythonProg.jpeg" />
          <Card.Body>
            <Card.Title>Python Course</Card.Title>
            <Card.Text className= "text-body-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> 

        {/* card 3 */}
        <Card className = "mt-5 bg-body-tertiary" style={{ width: '16rem' }} >
          <Card.Img variant="top" src="./javaProg.png" />
          <Card.Body>
            <Card.Title>Java Course</Card.Title>
            <Card.Text className= "text-body-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> 
      </Container>
     
       
      
     
    </div>
  );
}

export default App;
