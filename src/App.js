import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendorhome from "./components/Vendor/Vendorhome";
import Userhome from "./components/User/Userhome";


function App() {


  return (
    <>
      <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Vendorhome />} />
          <Route path="/User" element={<Userhome/>}/>
    
     </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
