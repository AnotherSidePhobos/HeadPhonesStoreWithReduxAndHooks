import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {updateSearchField} from './../../redux/actions';
import {fetchItemsBySearch} from './../../redux/actions';
import {fetchAllItems} from './../../redux/actions';


const Header = () => {

    const itemsInCart = useSelector(state => state.carts.itemsInCart)
    const commonPrice = useSelector(state => state.carts.commonPrice)
    const serchTerm = useSelector(state => state.products.searchFiled)
    const allItems = useSelector(state => state.products.productsArr)
    const dispatch = useDispatch();

    const onChangeSearch = (e) =>{
        if (e.target.value === '') {
            dispatch(fetchAllItems())
        }
        dispatch(updateSearchField(e.target.value));
        dispatch(fetchItemsBySearch(allItems, serchTerm));
    }


    const commonAmount = () => {
        let comAmount = 0;
        itemsInCart.map((item) => (
            comAmount += item.quantity
        ))
        return comAmount;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className='container'>
        <Link to='/'> <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </a>
        </Link>
        <div className="navbar-collapse hf">
            <div className='brand-links'>
            <Link to='/' className="navbar-brand ">Headphones</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link  to='/' className="nav-link">Home <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/cart' className="nav-link"><span className='items-cart-count'>{commonAmount() ? commonAmount() + ' pcs.' : ''}</span>
                    <BsCartFill/>
                    <span className='common-price-in-header'>{ commonPrice ? new Intl.NumberFormat().format(commonPrice) + ' RUB' : '' }</span></Link>
                </li>
                </ul>
            </div>
            <div>
                <form className="form-inline my-2 my-lg-0 search">
                    <input onChange={onChangeSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <Link to='/signup'><button className="btn btn-outline-success my-2 my-sm-0 signUpBtn">Sign Up</button></Link> */}

                </form>
            </div>

        </div>
        </div>
        </nav>

    )
}

export default Header
