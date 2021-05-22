
import './App.css';
import Clock from './Clock';
import Welcome from './Welcome';

function App() {
 return(
   <div>
   <Welcome message="Bonjour"/>
   <Clock date={new Date()}/>
   </div>
 )
 
}

export default App;
