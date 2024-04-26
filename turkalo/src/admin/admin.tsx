
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
                <button type="submit">upload</button>
            </form>
        </div>
    )
}


import { getDatabase, ref, set } from "firebase/database";

function writeData(name:string, desc:string, price:number, imageUrl:string, id:number) {
  const db = getDatabase();
  set(ref(db, 'clothes/' + id), {
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

console.log(app);


import { uploadBytes, getDownloadURL } from "firebase/storage";

function submitForm() {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (form.querySelector('input[name="name"]') as HTMLInputElement).value;
        const desc = (form.querySelector('input[name="desc"]') as HTMLInputElement).value;
        const price = (form.querySelector('input[name="price"]') as HTMLInputElement).value;
        const file = (form.querySelector('input[name="file"]') as HTMLInputElement).files?.[0];
        const id = Math.random();
        
        writeData(name, desc, parseInt(price), '', id);
    });

}