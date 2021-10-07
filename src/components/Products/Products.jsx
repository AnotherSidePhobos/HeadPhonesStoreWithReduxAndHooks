import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllItems} from './../../redux/actions';
import {addItemInCart} from './../../redux/actions';
import {setCommonPrice} from './../../redux/actions';
import Carusel from '../Carusel/Carusel';
import Pagination from './../Pagination/Pagination';

function Products() {

    const products = useSelector(state => state.products.productsArr)
    const dispatch = useDispatch();
    const commonPrice = useSelector(state => state.carts.commonPrice)
    const itemsInCart = useSelector(state => state.carts.itemsInCart)
    const pageSize = useSelector(state => state.products.pageSize)
    const currentPage = useSelector(state => state.products.currentPage)



    useEffect(() => {
        dispatch(fetchAllItems(currentPage, pageSize))
    }, [])

    const onAddBtnClick = (item) => {

        dispatch(addItemInCart(item, commonPrice, itemsInCart))

    }
    const onPageClick = (page) => {
        debugger
        alert(page)
    }
    return (
        <div className='products'>
            <div className='goods-page'>
                <Carusel/>
                <Pagination/>
            </div>

                    {products.map((item => (
                        <div className="card  bg-light mb-3">
                            <div className="card-header">{item.name}</div>
                            <img src={item.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{new Intl.NumberFormat().format(item.price)}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary" onClick={() => onAddBtnClick(item)}>Add to Cart</button>
                                <Link to={`/productItem/${item.id}`}><button className="btn btn-secondary moreBtn">More...</button></Link>
                            </div>
                        </div> 
                    )))}


        </div>
          
        
    )
}

export default Products



