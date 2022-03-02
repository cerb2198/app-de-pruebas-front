import Login from "./components/Login";
import Home from "./components/Home";
import { UserContextProvider } from "./context/UserContext";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          < Route path="/" element={ <Login/> }/>
          < Route exact path="/home" element={ <Home/> }/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
