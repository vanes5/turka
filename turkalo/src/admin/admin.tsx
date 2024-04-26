
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
    image : imageUrl
    
  });
}

import { getStorage} from "firebase/storage";

// Create a root reference
const storage = getStorage();

import {app} from '../firebase';

console.log(app);