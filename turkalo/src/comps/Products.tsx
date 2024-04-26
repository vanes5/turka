import { Container, Image, Row, Col } from 'react-bootstrap';
import  bg from '../img/bg.png';

export function Products() {
    return (
      <>
      <Container>
        <Row>
          <Col>      
            <Image src={bg} roundedCircle width="20%"/>
          </Col>
          <Col>      
            <h1>VöcsökWebShop</h1>
          </Col>
        </Row>
      </Container>
      </>
    )
  }