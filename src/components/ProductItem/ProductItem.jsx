import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {fetchAllItems} from './../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {addItemInCart} from './../../redux/actions';

const ProductItem = (props) => {

    debugger
    const params = useParams()

    const products = useSelector(state => state.products.productsArr)

    const dispatch = useDispatch();
    const commonPrice = useSelector(state => state.carts.commonPrice)
    const itemsInCart = useSelector(state => state.carts.itemsInCart)

    const item = products.filter((item) => item.id === params.id);
    const obj = item[0];

    const goBack = () => {
        props.history.goBack();
    }
    useEffect(() => {
        fetchAllItems()
    }, [products])


    const onAddBtnClick = (item) => {

        dispatch(addItemInCart(item, commonPrice, itemsInCart))

    }


    return (
        <div className='product-item'>
            <div>
                <img src={obj.image} alt={obj.name}/>
            </div>
            <div className='product-info'>
                <h2>{obj.name}</h2>
                <h4>Price: <strong>{obj.price}</strong></h4>
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
    )
}

export default ProductItem
