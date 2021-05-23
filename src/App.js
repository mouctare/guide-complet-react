
import './App.css';
import Clock from './Clock';
import  ToggleButton  from './ToggleButton';
import Welcome from './Welcome';

function App() {
 return(
   <div>
   <Welcome message="Bonjour"/>
   <Clock date={new Date()}/>
   <ToggleButton/>
   </div>
 )
 
}

export default App;
