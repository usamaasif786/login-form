import { Signup } from './components/signupform/signupform';
import { Login } from './components/loginform/loginform';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
          <Routes>
            <Route path="/"  element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
          </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;


