import { Container, Image, Row, Col } from 'react-bootstrap';
import '../CSS/Produtcs.css';

export function Products() {
    return (
      <>
      <Container>
        <Row>
        </Row>
        <Row id='termek'>
        </Row>
      </Container>
      </>
    )
  }



import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, ref as sref,getDownloadURL} from "firebase/storage";


async function getProducts() {
  

  const db = getDatabase();
  const clothesRef = ref(db, 'clothes');
  console.log(clothesRef)
  onValue(clothesRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    for (const key in data) {
      const product = data[key];
      console.log(product)
      const storage = getStorage();
      const storageRef = sref(storage, 'images/' + product.imageUrl);
      const imageUrl = getDownloadURL(storageRef)
      imageUrl.then((url) => {
      
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
      <br>
      <div class="card" style="width: 18rem;">
      <img src="${url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.desc}</p>
        <p class="card-text bold">${product.price} Ft</p>
        <a href="#" class="btn btn-prim">Kosárba</a>
      </div>
    </div>
      `
      document.getElementById('termek')?.appendChild(productDiv)

    }
  )}
})  
}

getProducts()