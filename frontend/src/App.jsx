import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


import Login from "./login";
import Dsb from "./Dsb";
import Create from "./create";
import Service from "./service"
import Status from "./Status";
import Daily from "./Daily";

function App(){
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Dsb" element={<Dsb/>}></Route>
          <Route path="/Service" element={<Service/>}></Route>
          <Route path="/Daily" element={<Daily/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/Status" element={<Status/>}></Route>

          </Routes>
    
    </Router>
    
  );
}
export default App;