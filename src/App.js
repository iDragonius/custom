import {React, useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import shop from './assets/icons/shop.svg'
import restaurant from './assets/icons/restaurant.svg'
import sweets from './assets/icons/cake.svg'
import Restaurant from './components/Stores/Restaurant';
import Sweets from './components/Stores/Sweets';
import Shop from './components/Stores/Shop';
import "./assets/css/main.css"
import ResponsiveSearch from './components/Responsive/ResponsiveSearch';
function App() {
  const [activeSection, setActiveSection] = useState("restaurant")

  function ChangeSection(e) {
    if(e.target.innerHTML === "Рестораны"){
      setActiveSection("restaurant")
    } 
    if (e.target.innerHTML === "Маркет"){
      setActiveSection("shop")
    } 
    if (e.target.innerHTML === "Сладости"){
      setActiveSection("sweets")

    }
  }

  return (
    <div >
        <Navbar/>
        <main>
        <div className="container">

        <div className={"store-type"}>
            <div onClick={ChangeSection} className={activeSection==="restaurant" ? "store-type-item active" : "store-type-item"}>
                <img src={restaurant} alt="restaurant"/>
                <span>Рестораны</span>
            </div>
            <div onClick={ChangeSection} className={activeSection==="shop" ? "store-type-item active" : "store-type-item"}>
                <img src={shop} alt="shop"/>
                <span>Маркет</span>
            </div>
            <div onClick={ChangeSection} className={activeSection==="sweets" ? "store-type-item active" : "store-type-item"}>
                <img src={sweets} alt="sweets"/>
                <span>Сладости</span>
            </div>

        </div>
        <ResponsiveSearch/>
        </div>
          <div className="container">
          {activeSection === "restaurant" ? <Restaurant/> : ""}
          {activeSection === "shop" ? <Shop/> : ""}
          {activeSection === "sweets" ? <Sweets/> : ""}
          </div>
          <Footer/>

        </main>

    </div>
  );
}

export default App;
