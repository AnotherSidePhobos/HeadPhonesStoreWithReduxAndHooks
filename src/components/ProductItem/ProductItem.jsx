import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fetchAllItems} from './../../redux/actions';
import {fetchAllItemsWithoutPagination} from './../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {addItemInCart} from './../../redux/actions';

const ProductItem = (props) => {

    debugger
    const params = useParams()
    const products = useSelector(state => state.products.productsArr)
    const [productState, setProductState] = useState(products)
    

    const dispatch = useDispatch();
    const commonPrice = useSelector(state => state.carts.commonPrice)
    const itemsInCart = useSelector(state => state.carts.itemsInCart)

    const item = productState.filter((item) => item.id === params.id);
    const obj = item[0];


    const goBack = () => {
        props.history.goBack();
    }

    useEffect(() => {
        fetchAllItems()
        console.log('product state: ', productState);
        console.log('item: ', obj);
    }, [products])




    const onAddBtnClick = (item) => {

        dispatch(addItemInCart(item, commonPrice, itemsInCart))
        

    }

    const onCommentBtnClick = () =>{
        alert('btn pressed')
    }
    return (
    <div>
        <div className='product-item'>
            <div>
                <img src={obj.image} alt={obj.name}/>
            </div>
            <div className='product-info'>
                <h2>{obj.name}</h2>
                <h4>Price: <strong>{new Intl.NumberFormat().format(obj.price)}</strong></h4>
                <div className='descItems'>
                    {!obj.description && <div>no description</div>}
                    {obj.description && <div>{obj.description}</div>}
                </div>
                <div className='product-buttons'>

                    <div><button  onClick={() => onAddBtnClick(obj)} className='btn btn-success me-2'>add to cart</button></div>
                    <div><button onClick={goBack} className='btn btn-info me-2'>back</button></div>
                </div>
            </div>
        </div>
        <div>
        <form>
            <div className='comment'>
                <div className='new-comment'>
                    <div  className='comment-title'>
                            leave your comment about the product
                        </div>
                        <div>
                        <input className='comment-input' type='text' placeholder='input your name...'/>

                        </div>
                        <div>
                        <textarea className='comment-textarea' placeholder='your comment...'></textarea>
                        <div>
                            <button onClick={onCommentBtnClick} className='btn btn-success comment-button'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className='existing-comments'>
                    <ul>
                        <li>Товар говно</li>
                        <li>Звук не очень</li>
                        <li>Дорого, я б лучше джибиель взял в три раза дешевше</li>
                    </ul>
                </div>

            </div>

        </form>

        </div>
    </div>

    )
}

export default ProductItem
