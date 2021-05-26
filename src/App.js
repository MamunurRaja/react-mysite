// import logo from './logo.svg';
import './App.css';
import FooterInfo from './Footer';
import Home from './Home';
import NavigationBar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MySkill from './MySkill';
import Education from './Education';

function App() {
  return (
    <Router>
    <div className="App">
        <NavigationBar/>
        
         <div className="backgr">
              <Switch>
                 <Route exact path='/'>
                    <Home/>
                 </Route>
                 <Route exact path='/skill'>
                    <MySkill/>
                 </Route>
                 <Route exact path='/education'>
                    <Education/>
                 </Route>
              </Switch>
         </div>
         <FooterInfo/>
    </div>
    </Router>
  );
}

export default App;
