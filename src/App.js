

import { Navbar,Nav, Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import Star from './Star';

function App() {
  return (
    <div className="App">
     
        
       <Navbar bg="dark" data-bs-theme="dark">
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
        <Card className = "mt-5 bglight.bg-body-tertiary" style={{ width: '16rem'}}>
          <Card.Img  className = "hover-zoom " variant="top" src="./jsProg.png"style={{ minHeight: "16rem"}}  />
          <Card.Body>
            <Card.Title>JavaScript Course </Card.Title>
            <Card.Text className= "text-body-secondary">
              JavaScript is the programming language of the Web.
              JavaScript is easy to learn. This course will teach you JavaScript from basic to advanced.
            </Card.Text>
            <div>
               <Star/><Star/><Star/><Star/> <span style={{fontSize:'14px'}}> (102 reviews)</span>
            </div>
           
          </Card.Body>
        </Card> 

        {/* card 2 */}
        <Card className = "mt-5 bg-body-tertiary" style={{ width: '16rem' }} >
          <Card.Img variant="top" src="./pythonProg.jpeg" />
          <Card.Body>
            <Card.Title>Python Course</Card.Title>
            <Card.Text className= "text-body-secondary">
              Java is a powerful general-purpose programming language. 
              This Java course will guide you to learn Java one step at 
              a time with the help of examples.
            </Card.Text>
              <div>
               <Star/><Star/><Star/><Star/><Star/> <span style={{fontSize:'14px'}}> (370 reviews)</span>
            </div>
            
          </Card.Body>
        </Card> 

        {/* card 3 */}
        <Card className = "mt-5 bg-body-tertiary" style={{ width: '16rem' }} >
          <Card.Img variant="top" src="./javaProg.png" />
          <Card.Body>
            <Card.Title>Java Course</Card.Title>
            <Card.Text className= "text-body-secondary">
              Master Python with our course from basics to advanced programming. 
              Learn through hands-on projects with expert instructors.
            </Card.Text>
            <div>
               <Star/><Star/><Star/> <span style={{fontSize:'14px'}}> (81 reviews)</span>
            </div>
          </Card.Body>
        </Card>
        {/* card 4 */}
        

        
      </Container>
     


      
     
    </div>
  );
}

export default App;
