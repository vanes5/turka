import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './comps/Layout';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={</>}></Route> */}
          {/* <Route path="termekek" element={<Elozmenyek />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
