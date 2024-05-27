import { Container, Image, Row, Col } from 'react-bootstrap';
import bg from '../img/bg.png';
import '../CSS/Home.css'; 

export function Home() {
    return (
      <>
      <Container className="home-container">
        <Row className="align-items-center">     
          <Col>      
            <Image src={bg} className="home-image" />
            <h1 className="text-center home-title">VöcsökWebShop</h1>
            <p className='text-justify home-text'>Üdvözöljük a Vöcsök online turkálóban, ahol a stílus és a fenntarthatóság találkozik! Webshopunkban különleges, egyedi ruhadarabok és kiegészítők széles választékát találja, melyeket gondosan válogattunk össze a legjobb minőségű second-hand termékek közül. Nálunk mindenki találhat valami különlegeset, legyen szó vintage kincsekről, modern dizájnerekről vagy klasszikus alapdarabokról. Célunk, hogy fenntarthatóbbá tegyük a divatot, miközben vásárlóinknak egyedi és megfizethető lehetőségeket kínálunk. Böngésszen kínálatunkban, és találja meg új kedvenceit a Vöcsök online turkálóban</p>
          </Col>
        </Row>
      </Container>
      </>
    )
}
