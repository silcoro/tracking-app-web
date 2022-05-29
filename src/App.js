import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import NavBar from './components/Nav/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import User from './components/User/User';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ Nav } />
      <Route exact path='/' component={Home} />
      <Route exact path='/nosotros' component={Nosotros} />
      <Route exact path='/intranet/usuario' component={User} /> 
      <Route exact path='/index/Home' component={NavBar} /> 
       
    </div>
    
  );
}

export default App;
//con el Route vamos a tener un erutamiento dinamico y a la vez renderizan un componente