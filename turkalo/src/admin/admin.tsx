
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
        </div>
    )
}


import { getDatabase, ref, set } from "firebase/database";

function writeData(name:string, desc:string, price:number, imageUrl:string, id:any) {
  const db = getDatabase();
  set(ref(db,'clothes/'+id), {
    name: name,
    description: desc,
    price: price,
    image : imageUrl
    
  });
}

import { getStorage} from "firebase/storage";

// Create a root reference
const storage = getStorage();

import {app} from '../firebase';
console.log(app)


import { uploadBytes, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";

function getId() {  
    var counterRef = firebase.database().ref('counter');
    return counterRef.transaction(function(currentId) {
      return currentId + 1;
    });
  }


  //Call the asynchronous getID() function
  getId().then(function(transactionResult) {
    var newId = transactionResult.snapshot.val();
    console.log(newId);
    firebase.database().ref('clothes/').set({id: newId});
  });

function submitForm() {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value;
        const desc = (form.querySelector('input[name="desc"]') as HTMLInputElement).value;
        const price = (form.querySelector('input[name="price"]') as HTMLInputElement).value;
        const file = (form.querySelector('input[name="file"]') as HTMLInputElement).files?.[0];
        //id generalas, kep feltoltese a storageba, url kell meg koszi
        const id = getId();  
        console.log(id)
        writeData(name, desc, parseInt(price), 'kesobb megoldani', id);
    });

}