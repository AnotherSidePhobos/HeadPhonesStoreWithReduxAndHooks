import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fetchAllItems} from './../../redux/actions';
import {fetchProductsApiAction} from './../../redux/actions';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addItemInCart} from './../../redux/actions';
import {fetchProduct} from './../../redux/actions';
import {updateInput} from './../../redux/actions';
import {updateTextarea} from './../../redux/actions';
import {addNewComment} from './../../redux/actions';
import axios from 'axios';
import {fetchProductById} from './../../Api/api';
import Ration from './../Ration/Ration';

// const ProductItem = (props) => {

//     const fetchProductsApi = async () => {
//         const res = await fetch(`http://localhost:3002/productItems`)
//         const jsonData = await res.json();
//         products = jsonData;
//         return products;

//     }
//     debugger
//     const params = useParams()
//     const prods = [];

//     const products = useSelector(state => state.products.productsArr)
//     if (!products) {
//         products = fetchProductsApi();
//     }

//     const dispatch = useDispatch();
//     const commonPrice = useSelector(state => state.carts.commonPrice)
//     const itemsInCart = useSelector(state => state.carts.itemsInCart)

//     const item = products.filter((item) => item.id === params.id);
//     const obj = item[0];


//     const goBack = () => {
//         props.history.goBack();
//     }

//     useEffect(() => {
//         debugger
//     }, [])




//     const onAddBtnClick = (item) => {

//         dispatch(addItemInCart(item, commonPrice, itemsInCart))
        

//     }

//     const onCommentBtnClick = () =>{
//         alert('btn pressed')
//     }
//     return (


//     )
// }

// export default ProductItem




class ProductItem extends Component {


    goBack = () => {
        this.props.history.goBack();
    }


    onAddBtnClick = (item) => {
        debugger
        this.props.addItemInCart(item, this.props.commonPrice, this.props.itemsInCart)

    }
    onCommentBtnClick = (e) => {
        e.preventDefault();
        // this.props.nameCommentator
        // this.props.textComment
        debugger
        
        this.props.addNewComment(this.props.product.id, this.props.nameCommentator, this.props.textComment, this.props.productsArr);
    }

    // const onMinusBtn = (item) => {
    //     dispatch(minusItemFromCart(item, itemsInCart, commonPrice))
    // }
    onInputChange = (e) => {
        
        
        this.props.updateInput(e.target.value)
        
    }
    onTextAreaChange = (e) => {
        
        this.props.updateTextarea(e.target.value)
        
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        fetchProductById(id)
        .then((response) => this.props.fetchProduct(response));
    }

    render() {
        return (
            <div >
                {

                    <div>
                    <div className='product-item'>
                        <div>
                            <img src={this.props.product.image} alt={this.props.product.name}/>
                        </div>
                        <div className='product-info'>
                            <h2>{this.props.product.name}</h2>
                            <h4>Price: <strong>{new Intl.NumberFormat().format(this.props.product.price)}</strong></h4>
                            <div className='descItems'>
                                {!this.props.product.description && <div>no description</div>}
                                {this.props.product.description && <div>{this.props.product.description}</div>}
                            </div> 
                             <div className='product-buttons'>
            
                                <div><button  onClick={() => this.onAddBtnClick(this.props.product)} className='btn btn-success me-2'>add to cart</button></div>
                                <div><button onClick={this.goBack} className='btn btn-info me-2'>back</button></div>
                            </div>
                        </div>
                    </div>
                    <div>







                    <Ration product={this.props.product}/>












                    <form>
                        <div className='comment product-item-line'>
                            <div className='new-comment'>
                                <div  className='comment-title'>
                                        <h3>Leave your comment about the product</h3>
                                    </div>
                                    <div>
                                    <input onChange={this.onInputChange} value={this.props.nameCommentator} className='comment-input' type='text' placeholder='input your name...'/>
            
                                    </div>
                                    <div>
                                    <textarea onChange={this.onTextAreaChange} value={this.props.textComment} className='comment-textarea' placeholder='your comment...'></textarea>
                                    <div>
                                        <button onClick={(e) => {this.onCommentBtnClick(e)}} className='btn btn-success comment-button'>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className='existing-comments'>
                                <div className='exist-com-title'>
                                    <h3>Comments:</h3>
                                </div>
                                <div>
                                    <ul>
                                        <li className='exist-com'>
                                            <div>
                                                Alexey, age: 26
                                            </div>
                                            <div>
                                                Товар говно
                                            </div>
                                        </li>
                                        <li className='exist-com'>
                                            <div>
                                                Vinc, age: 1
                                            </div>
                                            <div>
                                                Звук не очень
                                            </div>
                                        </li>
                                        <li className='exist-com'>
                                            <div>
                                                Juice, age: 1
                                            </div>
                                            <div>
                                                Дорого, я б лучше джибиель взял в три раза дешевше
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
            
                        </div>
            
                    </form>
            
                    </div>
                </div>
                    
                }

                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        product: state.products.product,
        commonPrice: state.carts.commonPrice,
        itemsInCart: state.carts.itemsInCart,
        nameCommentator: state.products.nameCommentator,
        textComment: state.products.textComment,
        productsArr: state.products.productsArr
    }
}
const mapDispatchToProps = {
    fetchProduct,
    addItemInCart,
    updateInput,
    updateTextarea,
    addNewComment
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);