import logo from './logo.svg';
import './App.css';
import {data} from './Api/api';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import {Route, Switch} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Signup from './components/Signup/Signup';
import ProductItem from './components/ProductItem/ProductItem';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <br/>
        <br/>
        <br/>
        
        <div className='container'>
            <Switch>
              <Route path='/' exact component={Products}></Route>
              <Route path='/productItem/:id' component={ProductItem}/>
              <Route path='/signup' exact component={Signup}></Route>
              <Route path='/cart' component={Cart}></Route>
              <Route path='/countactus' exact component={ContactUs}></Route>
              <Route path='/aboutus' exact component={AboutUs}></Route>
            </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
