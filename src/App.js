// import logo from './logo.svg';
import './App.css';
import FooterInfo from './Footer';
import Home from './Home';
import NavigationBar from './Navbar';

function App() {
  return (
    <div className="App">
        <NavigationBar/>
         <div className="backgr">
           <div className="container">
              <Home/>
            </div>
         </div>
         <FooterInfo/>
    </div>
  );
}

export default App;
