import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {setCurrentPage} from './../../redux/actions';
import {fetchAllItems} from './../../redux/actions';
import {setAllItemsCount} from './../../redux/actions';

const Pagination = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.products.currentPage)
    
    const totalItemsCount = useSelector(state => state.products.totalItemsCount)
    const pageSize = useSelector(state => state.products.pageSize)
    const productsArr = useSelector(state => state.products.productsArr)
    let pagesCount = Math.ceil(totalItemsCount/pageSize);
    console.log('pagesCount: ', pagesCount);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    pages.push(pagesCount)

    const onPageClick = (page) =>{
        dispatch(setCurrentPage(page))
    }

    useEffect(() => {
        dispatch(fetchAllItems(currentPage, 3))
    }, [currentPage])

    useEffect(() => {
        debugger
        dispatch(setAllItemsCount())

    }, [])
    return (
        <div className='pagination'>
            {
                pages.map((page) => {
                    return(
                        <span className='page-number'>
                            <span onClick={() => onPageClick(page)} className={currentPage == page ? 'active-page page' : 'page'}>{page}</span>
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Pagination
