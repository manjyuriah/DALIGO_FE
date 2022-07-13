
import './App.css';
import { Link } from 'react-router-dom';
import { Router } from 'pages';

function App() {
  return (
    <div className="App">
      <Link to="/">main</Link>
      <Link to="/login">login</Link>
      <Link to="/test">test</Link>
      <Router/>
    </div>
  );
}

export default App;
