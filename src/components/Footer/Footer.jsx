import React from 'react';
import './Footer.css'
import rasm from '../../assets/img/Car.png'
import rasm1 from '../../assets/img/flow.png'
import rasm2 from '../../assets/img/lik.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footir_all">
                        <div className="footir_row">
                         <div className="car">
                       <div className="car_all">
                       <div className="img">
                        <img src={rasm} alt="" />
                        </div>
                          <p>Готовим вручную и с любовью</p>
                       </div>
                       <div className="car_all">
                       <div className="img">
                          <img src={rasm1} alt="" />
                          </div>
                          <p>Доставим <br /> в день заказа</p>
                       </div>
                       <div className="car_all">
                       <div className="img">
                          <img src={rasm2} alt="" />
                          </div>
                          <p>100% миндальная мука и натуральные ингредиенты</p>
                       </div>
                         </div>
                         <div className="pr">
                            <p>© 2021 Макароншоп <br />ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, <br /> дом 22</p>
                         </div>
                        </div>
                        <div className="footir_row">
                            <ul>
                                <h1>Информация</h1>
                                <li>
                                    <a href="" className="">О компании</a>
                                </li>
                                <li>
                                    <a href="" className="">Гарантии вкуса и <br />свежести </a>
                                </li>
                                <li>
                                    <a href="" className="">Доставка и оплата</a>
                                </li>
                                <li>
                                    <a href="" className="">Контакты</a>
                                </li>
                            </ul>
                        </div>
                       






                        <div className="footir_row">
                            <ul>
                                <h1>Каталог</h1>
                                <li>
                                    <a href="" className=""> Каталог десертов</a>
                                </li>
                                <li>
                                    <a href="" className="">Готовые наборы</a>
                                </li>
                                <li>
                                    <a href="" className="">Собрать свой набор</a>
                                </li>
                                <li>
                                    <a href="" className="">Наборы с печатью</a>
                                </li>
                                <li>
                                    <a href="" className="">Свадебные предложения</a>
                                </li>
                                <li>
                                    <a href="" className="">Акции</a>
                                </li>
                            </ul>
                        </div>
                       


                        <div className="footir_row">
                            <ul>
                                <h1>ДЛЯ БИЗНЕСА</h1>
                                <li>
                                    <a href="" className=""> Корпоративные подарки</a>
                                </li>
                                <li>
                                    <a href="" className="">Для юридических лиц </a>
                                </li>
                                <li>
                                    <a href="" className="">Оповикам</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footir_row">
                            <ul>
                                <h1>+7 (812) 309 82 88</h1>
                               <p style={{fontSize:'14px', marginLeft:'30px'}}>с 9:00 до 21:00</p>
                               <div className="ikon">
                                <div className="ikon_all">
                                    <div className="ikon_link">
                                    <RiInstagramFill />
                                    </div>
                                </div>
                                <div className="ikon_all">
                                    <div className="ikon_link">
                                    <FaFacebook />
                                    </div>
                                </div>
                                <div className="ikon_all">
                                    <div className="ikon_link">
                                    <IoLogoGithub />
                                    </div>
                                </div>
                               </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
