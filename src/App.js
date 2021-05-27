
import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import  ToggleButton  from './ToggleButton';
import Welcome from './Welcome';

function App() {
 return(
   <div>
   <Welcome message="Bonjour"/>
   <Clock date={new Date()}/>
   <ToggleButton/>
   <Greeting/>
   </div>
 )
 
}

export default App;
