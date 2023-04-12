import { Signup } from './components/signupform/signupform';
import { Login } from './components/loginform/loginform';
import MainPage from './components/body/mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
          <Routes>
            <Route exact path="/"  element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
            <Route path="/mainpage" element={<MainPage/>}/>
          </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;


