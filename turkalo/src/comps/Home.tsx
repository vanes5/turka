import { Container, Image, Row, Col } from 'react-bootstrap';
import  bg from '../img/bg.png';

export function Home() {
    return (
      <>
      <Container>
        <Row>     
          <Col>      
            <Image src={bg} height="25%" width="100%"/>
            <h1 className="text-center">VöcsökWebShop</h1>
            <p className='text-justify'>Üdvözöljük a Vöcsök online turkálóban, ahol a stílus és a fenntarthatóság találkozik! Webshopunkban különleges, egyedi ruhadarabok és kiegészítők széles választékát találja, melyeket gondosan válogattunk össze a legjobb minőségű second-hand termékek közül. Nálunk mindenki találhat valami különlegeset, legyen szó vintage kincsekről, modern dizájnerekről vagy klasszikus alapdarabokról. Célunk, hogy fenntarthatóbbá tegyük a divatot, miközben vásárlóinknak egyedi és megfizethető lehetőségeket kínálunk. Böngésszen kínálatunkban, és találja meg új kedvenceit a Vöcsök online turkálóban</p>
          </Col>
        </Row>
      </Container>
      </>
    )
  }