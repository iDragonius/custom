import {React, useState} from "react";
import logo from "../assets/icons/logo.svg"
import logoRes from "../assets/icons/logo-res.svg"
import basket from "../assets/icons/basket.svg"
import location from "../assets/icons/location.svg"
import SearchModal from "./Modals/SearchModal";
function Navbar () {
    const [modalActive, setModalActive] = useState(false)
    return (
        <header>
        <div className="container">
                <div  className="logo">
                    <img src={logo} className="logos" alt="logo" width="150px"/>    
                    <img src={logoRes} className="logo-responsive"  alt="logo" width="45px"/>    
                </div>
                <div>
                    <div className="header-search " >
                        <div className="search-main">
                            <svg  viewBox="0 0 24 24" className="input_prefix ng-star-inserted" width= "24px" height= "24px"><path  fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
                            <input type="text" name="" placeholder="рестораны, еда и напитки"  onFocus={()=>setModalActive(true)} onBlur={()=>setModalActive(false)} />
                        </div>

                        <div className="search-main-l">
                        <img src={location} className="loc-icon" alt="location"/>
                            <button>Введите адрес доставки</button>
                        </div>
            
                    </div>
                    <SearchModal active={modalActive} >
                            <div> Trends </div>
                            <ul>
                                <li>#burger</li>
                                <li>#pizza</li>
                                <li>#steak</li>
                                <li>#chicken</li>
                                <li>#kebab</li>
                                <li>#salad</li>
                                <li>#tantuni</li>
                                <li>#sandwich</li>
                                <li>#doner</li>
                                <li>#sushi</li>
                                <li>#lahmacun</li>
                            </ul>
                    </SearchModal>
                </div>
      
                <div className="wrapper">
                    <div className="wrapper nav-btns login">
                        <svg  viewBox="0 0 20 20" width="24px" height="24px" className="lang_icon"><path  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg>
                        <p className="responsive-nav">Вход</p>
                    </div> 
                    <div className="wrapper nav-btns responsive-nav basket">
                        <img src={basket} alt="gps" width="24px" height="24px"/>
                        <p >Корзина</p>
                    </div>
                </div>
        </div>
   
    </header>
      );
}

export default Navbar ;