import React from "react";
import SliderMain from "../Restaurant/SliderMain";
import Categories from "../Restaurant/Categories";
import Slider1 from "../Restaurant/Slider1";
import Slider2 from "../Restaurant/Slider2";

import Market from "../Market";
import ClosedMarket from "../ClosedMarket";
import Modal from "../Modals/Modal";
function Restaurant() {
    return (
        
        <div>
                
            <SliderMain/>
            <h1 >Категории</h1>
            <Categories/>
            <Slider1 title={"Любители сладостей 🍰🍩🧁"}/>
            <Slider2 title={"Скидка 50% 😍"}/>
            <Slider1 title={"Бесплатная доставка"}/>
            <Slider2 title={"Бургер тусовка"}/>
            <Slider1 title={"Комбо меню"}/>
            <Slider2 title={"Новые партнеры"}/>
            <Market title={"Рестораны"}/>
            <ClosedMarket title={"Закрытые рестораны"}/>

        </div>

      );
}

export default Restaurant;