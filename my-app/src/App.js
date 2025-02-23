// import logo from './logo.svg';
import './App.css';
import { Header} from './Header.jsx';
import Footer from './Footer.jsx';
import {Button,Card,Container ,Row,Col} from 'react-bootstrap';
import { blog } from './Data/blog.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faSearch} from '@fortawesome/free-solid-svg-icons';
function App() {
   let headerInfo={
    email:'ab@gmail.com',
    phone:'1234567890'
   }


   
  return (
    <div className="main">
   <Header headerInfo={headerInfo} cname="satya"> 
    <h1>Welcome to header sdfghc </h1>
    <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
    <FontAwesomeIcon icon={faPhone} className='text-danger'/>
    <FontAwesomeIcon icon={faSearch} className='text-danger'/>
   </Header>
{/* <Container fluid>
  <Container>
    <Row>
      <Col className='col-12 text-center py-4'>
         <h1>Our Courses</h1>
      </Col>
    </Row>
    <Row>
         <Col lg="3" md="6">
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
          <Card.Title>Course 1</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
               </Card>
      </Col>
      <Col lg="3" md="6">
           
      <Col lg="3" md="6">
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
          <Card.Title>Course 1</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
               </Card>
      </Col>
      
      </Col>
      <Col lg="3" md="6">
      <Col lg="3" md="6">
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
          <Card.Title>Course 1</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
               </Card>
      </Col>
      
      
      </Col>
      <Col lg="3" md="6">
      <Col lg="3" md="6">
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
          <Card.Title>Course 1</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
               </Card>
      </Col>
      </Col>
    </Row>
  </Container>
</Container> */}
<Container>
  <Row>
        {blog.map((v,i)=>
        {
          return ( <ProductIntems pitem={v} key={i}></ProductIntems>)
        })}
       
       
  </Row>
  </Container>




   <Footer/>



    </div>
  );
}

export default App;



// function Card(){
//   return (
//   <div>
//     <div className='cardItems'>satya</div>
//   </div>
// );
// }
function ProductIntems({pitem}){
  return(
   <div className="col-lg-3 mb-4">
       <Card  >
            <Card.Body>
          <Card.Title>{pitem.title}</Card.Title>
            <Card.Text>
         {pitem.body}
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
</Card>
   </div>
  )
}

