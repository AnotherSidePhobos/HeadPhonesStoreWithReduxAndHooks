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

function App() {
  return (
    <div className="app">
        <Header/>
        <br/>
        <div className='container'>
            <Switch>
              <Route path='/' exact component={Products}></Route>
              <Route path='/productItem/:id' component={ProductItem}/>
              <Route path='/signup' exact component={Signup}></Route>
              <Route path='/cart' component={Cart}></Route>
            </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
