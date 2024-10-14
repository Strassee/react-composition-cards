import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card img={logo}>  
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <br/>
      <Card>  
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </Card>
    </div>
  );
}

export default App;
