import React,{useState} from 'react';
import './Product.css'
import Loading from '../Loading/Loading';
import { MdOutlineShoppingCart } from "react-icons/md";
import {useGetProductsQuery} from '../../components/context/PruductApi/index'
import { useGetCategoryQuery } from '../context/Category/categoryApi';
const Product = () => {
    const [categoryAll,setCategory] = useState('/')
    const [count,setCount] = useState(1)
    const {data,isError,isLoading} = useGetProductsQuery({params: {limit: 3 *count},path:categoryAll})
    const {data:category} = useGetCategoryQuery()
    console.log(category);

    let cards= data?.products?.map((product) =>(
        <div className="card">
            <img width={200} src={product.images[0]} alt="" />
        <div className="teg1">
        <h1>{product.title}</h1>
    <p>{product.description}</p>
        </div>
        <div className="yr"></div>
        <div className="price">
        <div className="price_all">
    <p>{product.price}</p>
</div>
<div className="price_all">
<MdOutlineShoppingCart />
<span>В корзину</span>
</div>
        </div>
       </div>
    ))
    return (
        <div>
        <div className="container">
        <ul className='category'>
            <li>
                <data style={{background:'#F7EBE5'}} onClick={() => setCategory('/')} value="/">All</data>
            </li>
           {
            category?.map((el) =>(
                <li key={el}>
                    <data 
                    style={{background:  categoryAll === `/category/${el}` ? "#F7Eb95" : " #F7EBE5"}}
                    onClick={(e) => setCategory(e.target.value)} value={`/category/${el}`}>{el}</data>
                </li>
            ))
            }
           </ul>

           {
            isLoading ? <Loading/>
            : <></>
           }
            <div className="wraper">
                {cards}
            </div>
           <div className="btn1">
           <button onClick={() => setCount(p => p + 1)} className='btn'>Показать ещё</button>
           </div>
        </div>
            
        </div>
    );
}

export default Product;
