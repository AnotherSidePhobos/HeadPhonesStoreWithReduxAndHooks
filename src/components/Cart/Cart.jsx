import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {deleteItemFromCart} from './../../redux/actions';


const Cart = () => {
    const itemsInCart = useSelector(state => state.carts.itemsInCart)
    const comPrice = useSelector(state => state.carts.commonPrice)
    console.log('itemsInCart from cart: ', itemsInCart);
    const dispatch = useDispatch();
    const commonPrice = useSelector(state => state.carts.commonPrice)
    const quntity = useSelector(state => state.carts.itemsInCart)
    console.log('quntity: ', quntity);
    const onDeleteClick = (item) => {
        debugger
        dispatch(deleteItemFromCart(item, itemsInCart, commonPrice))
    }
    // const onMinusOne = (item) => {
    //     dispatch(minusItemFromCart(item, itemsInCart, commonPrice))
    // }
    return (
        <div className='cart-items'>
            Cart


            {itemsInCart.length === 0 && <div>there is not items in the cart</div> }
            {
                <table className='table'>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>image</td>
                            <td>price</td>
                            <td>amount</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    {
                        itemsInCart.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td><img className='image__min' src={item.image}/></td>
                            <td>{new Intl.NumberFormat().format(item.price)}</td>
                            <td>{item.quantity && <span>{item.quantity}</span>}</td>
                            <td><button className='btn btn-info'>-</button></td>
                            <td><button className='btn btn-info'>+</button></td>
                            <td><button onClick={() => {onDeleteClick(item)}} className='btn btn-danger delete__btn'>&times;</button></td>
                        </tr>
                    </tbody>
                        ))
                    }
                </table>
            }
            {/* TODO: footer move to down */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                Total price is: {new Intl.NumberFormat().format(comPrice)}
            </div>
        </div>
    )
}

export default Cart
