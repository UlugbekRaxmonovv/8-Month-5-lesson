import React,{useState} from 'react';
import './Navbar.css'
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import rasm from '../../assets/img/лого.png'
import { MdOutlineLocationOn } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
const Navbar = () => {
    const [fix, setFix] = useState(false);
    function setFixd() {
        if (window.scrollY >= 5) {
          setFix(true);
        } else {
          setFix(false);
        }
      }
      window.addEventListener('scroll', setFixd);
    return (
        <div>
            <div className="header_top">
   <div className="header_top_lift container">
   <div className="all">
   <div className="all_1">
   <p>Гарантия свежести</p>
   </div>
   <div className="all_1">
   <p>Гарантия свежести</p>
   </div>
   <div className="all_1">
   <p>Гарантия свежести</p>
   </div>
   <div className="all_1">
   <p>Гарантия свежести</p>
   </div>
   </div>

   <div className="all">
   <div className="all_1">
   <MdOutlineLocationOn />
<span>Санкт-Петербург</span>
   </div>
   <div className="all_1">
   <IoPhonePortraitOutline />
   <span>8 812 309-82-88</span>
   </div>
   <div className="all_1">
   <GrCart />
   <span>В корзине (4 товара)</span>
   </div>
   <div className="all_1">
    <div className="all_2">
        <div className="all_3">
            <FaTelegramPlane/>
        </div>
        <div className="all_3">
        <PiInstagramLogoFill />
        </div>
        <div className="all_3">
        <FaFacebookSquare />
        </div>
    </div>
   </div>
   </div>
   </div>
            </div>
            <header  className={fix ? 'header_link fixed' : 'header_link'}>
                <nav className='container'>
                    <ul className='ul_link'>
                        <li>
                            <a href="" className="">Создать дизайн</a> <span className='span'>%</span>
                         </li>
                        <li>
                           <select name="" id="">
                           <option value="">подарочные наборы</option>
                           <option value="">подарочные наборы</option>
                           </select>
                           </li>
                        <li>
                            <a href="" className="">Собрать набор</a>
                        </li>
                        <li>
                          <img src={rasm} alt="" />
                        </li>
                        <li>
                            <a href="" className="">Создать дизайн</a>
                        </li>
                        <li>
                        <select name="" id="">
                           <option value="">подарочные наборы</option>
                           <option value="">подарочные наборы</option>
                           </select>
                        </li>

                        <li>
                        <select name="" id="">
                           <option value="">подарочные наборы</option>
                           <option value="">подарочные наборы</option>
                           </select>
                        </li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
}

export default Navbar;
