import React, { Component } from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import { connect, useDispatch, useSelector } from 'react-redux';
import {changeRation} from './../../redux/actions';


class Ration extends Component {

    render(){
    const onStarClick = (rat) =>{

        changeRation(this.props.product, rat, this.props.productArr)

    }


    const arr5 = [1,2,3,4,5]

        return (
            <div className='ration'>
                {<span>{this.props.product.ratio}</span>}
                
                <div className='ration-title'>
                    Press on number:
                </div>
                
                {
                    arr5.map((arr) => (
                        <span onClick={(e)=>onStarClick(arr)}><AiOutlineStar/></span>
                    ))
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        productArr: state.products.productsArr
    }
}


const mapDispatchToProps = {
    changeRation
}

export default connect(mapStateToProps, mapDispatchToProps)(Ration);




