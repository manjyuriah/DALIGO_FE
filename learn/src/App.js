
import './App.css';
import { Link } from 'react-router-dom';
import { Router } from 'pages';

function App() {
  return (
    <div className="App">
      <h1> Learn Team 프로젝트 생성중입니다.</h1>
      <Link to="/">main</Link>
      <Link to="/login">login</Link>
      <Router/>
    </div>
  );
}

export default App;
