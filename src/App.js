import './App.css';
import { Signup } from './components/signupform/signupform';
import { Login } from './components/loginform/loginform';
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
