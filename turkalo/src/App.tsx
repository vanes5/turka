import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './comps/Layout';
import { Home } from './comps/Home';
import { NoPage } from './comps/NoPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home/>}></Route>
          {/* <Route path="termekek" element={<Elozmenyek />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
