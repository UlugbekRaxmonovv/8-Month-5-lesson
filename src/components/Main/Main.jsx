import React from 'react';
import './Main.css'
import Product from '../Product/Product';

const Main = ({data}) => {
    return (
        <div>
            <main>
        <div className="container">
            <div className="main">
                <div className="main-all">
                Главная 
                </div>
                <div className="main-all">
                Каталог 
                </div>
                <div className="main-all">
                <span>Готовые наборы</span>
                </div>
               
            </div>
            <div className="teg">
                <h1>Готовые наборы</h1>
            </div>
            <Product btn={data}/>
        </div>
            </main>
        </div>
    );
}

export default Main;
