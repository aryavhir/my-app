import './App.css';
import PayPalButton from './PayPalButton';  // Import the PayPalButton component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hydro Online</h1>
        <p>Support Us</p>
        {/* PayPal Button */}
        <PayPalButton /> 
        
      </header>
    </div>
  );
}

export default App;
