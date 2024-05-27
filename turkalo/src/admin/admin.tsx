
export function AdminPage() {
    return (
        <div>
            <h1>Admin</h1>
            <form>
                <label>
                    name
                    <input type="text" name="name" />
                </label>
                <label>
                    description
                    <input type="text" name="desc" />
                </label>
                <label>
                    price
                    <input type="number" name="price" />
                </label>
                <input type="file" name="file" />
                <button type="submit" onClick={submitForm}>upload</button>
            </form>


            <div id="torlosresz"></div>
        </div>
    )
}


import { getDatabase, ref, set, push, onValue,child,remove, get} from "firebase/database";


function writeData(name:string, desc:string, price:number, imageUrl:string) {
  const db = getDatabase();
    const ListRef = ref(db, 'clothes');
    const newclothesRef = push(ListRef);
    set(newclothesRef, {
        name: name,
        desc: desc,
        price: price,
        imageUrl: imageUrl
    });
}


// Create a root reference
const storage = getStorage();

import {app} from '../firebase';
console.log(app)



import firebase from "firebase/compat/app";



import { getStorage, ref as sref, uploadBytes, getDownloadURL } from "firebase/storage";

function uploadImage(file:any) {

const storage = getStorage();
const storageRef = sref(storage, 'images/' + file.name);

// Create file metadata including the content type
/** @type {any} */
const metadata = {
  contentType: 'image',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, file, metadata);
}


async function submitForm() {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value;
        const desc = (form.querySelector('input[name="desc"]') as HTMLInputElement).value;
        const price = (form.querySelector('input[name="price"]') as HTMLInputElement).value;
        const file = (form.querySelector('input[name="file"]') as HTMLInputElement).files?.[0];

        var filename = "";
        if (file == undefined) {
            console.log("nincs file de ez nem baj");
            filename = "nofile.png";
        }
        else {
            filename = file.name;
            uploadImage(file);
        }
        
      
        writeData(name, desc, parseInt(price), filename);
        console.log("beszaras");
    });
    getProducts();
}

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
        <div class="card" style="width: 18rem;">
        <img src="${url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">${product.price} Ft</p>
          <a href="#" class="btn btn-primary" id="${key}">Törlés</a>
        </div>
      </div>
        `
        document.getElementById('torlosresz')?.appendChild(productDiv)
        document.getElementById(key)?.addEventListener('click', function() {
          const db = getDatabase();
          const clothesRef = ref(db, 'clothes');
          remove(child(clothesRef, key));
          window.location.reload();
      })
    }
    )}
  })  
  }
  
  getProducts()