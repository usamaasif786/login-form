import './App.css';
import { Signup } from './components/signupform/signupform';
import { Login } from './components/signupform/loginform';
function App() {
  return (
    <div>
      <Login/>
      <br/>
      <br/>
      <Signup/>
    </div>

  );
}

export default App;
