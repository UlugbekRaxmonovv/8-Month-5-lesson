import React,{useEffect, useState} from 'react';
import './Product.css'
import Loading from '../Loading/Loading';
import SingleRoute from '../SingleRout/SingleRoute';
import { useSearchParams } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import {useGetProductsQuery} from '../../components/context/PruductApi/index'
import { useGetCategoryQuery } from '../context/Category/categoryApi';
import Modul from '../Modul/Modul';
import axios from 'axios';
const Product = ({btn,btn1}) => {
    const [categoryAll,setCategory] = useState('/')
    const [count,setCount] = useState(1)
    const {data,isError,isLoading} = useGetProductsQuery({params: {limit: 3 *count},path:categoryAll})
    const {data:category} = useGetCategoryQuery()
    const API_URL = "https://dummyjson.com"
    const [searchParms,setSearchParms] = useSearchParams()
    const[ dataList,setData] = useState(null)
  document.body.style.overflow =  dataList ? "hidden" : "auto"


    useEffect(() =>{
    let id = searchParms.get('details')
    if(id) {
    axios
    .get(`${API_URL}/products/${id}`)
    .then((ris) => setData(ris.data))
    }
    },[searchParms])

    const remov = () =>{
        setData(null)
        setSearchParms({})
    }


    let cards= data?.products?.map((product) =>(
        <div className="card">
            <img
            onClick={() =>
             setSearchParms({details: product.id})}
            width={200} src={product.images[0]} alt="" />
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
<MdOutlineShoppingCart onClick={() => btn(true) } />
<span>В корзину</span>
</div>
        </div>
       </div>
    ))
    return (
        <div>
        <div className="container">
        {
            dataList ? 
            <Modul btn1={remov} >
                <SingleRoute detail={dataList} />
            </Modul>
            :
            <></>
           }

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
