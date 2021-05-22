
import './App.css';

function App() {
  function formatName(userName){
    return userName.toUpperCase();
  }
  function getGreeting(userame){
    if(userame){
      return <h1>Hello {formatName(userame)}</h1>
    }else{
      return <h1>Hello Stranger</h1>
    }
   
  }
  const name = "John Smith";
  
  return (
    <div className="App">
     <h1>Bonjour {formatName(name)} !</h1>
     <h1>{getGreeting('')}</h1>
    </div>
  );
 
}

export default App;
