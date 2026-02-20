 
import Ewaste from "./pages/Ewaste";

import HomePage from "./pages/HomePage";

import { Routes, Route, Navigate } from "react-router-dom";
 

const App = () => {
 


  return (
    <div className=" " > 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ewaste" element={<Ewaste />} />
        
      </Routes> 
    </div>
  );
};
export default App;
