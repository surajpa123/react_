import logo from './logo.svg';
import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import RestaurantCard from './components/RestaurantCard';
import Header from './components/Header';
import {Route,Routes} from "react-router-dom";
import AllRoutes from './components/Rountes';

function App() {
  return (
    <div className="App">


{/* <Header/>
<Body/>
<Footer/>
<RestaurantCard/> */}
<Header/>
<AllRoutes/>

    </div>
  );
}

export default App;
