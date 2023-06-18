//import logo from './logo.svg';
import newlogo from './Neff.png';
import './App.css';

 
function loadPlanCard() {

  var card = document.createElement("div");
  card.className = "App-card";
  card.innerHTML = "<h3>Here is your plan that I divised for you!</h3>";
  document.body.appendChild(card);
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={newlogo} className="App-logo" alt="logo" />
          
          <b>
            TaskCompanion
          </b>
          
        
        
        
        <button 
          className= "App-button" 
          onClick={loadPlanCard()}> Get Started </button>

      </header>
    </div>
  );
}

export default App;
