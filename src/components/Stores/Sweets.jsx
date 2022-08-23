import ClosedMarket from "../ClosedMarket";
import Market from "../Market";
import Categories from "../Sweets/Categories";
import Slider1 from "../Sweets/Slider1";
import SliderMain from "../Sweets/SliderMain";

function Cake() {
    return ( 
        <div>
            <SliderMain/>
            <div class="container">
                <h1 >Категории</h1>
            </div>
            <Categories/>
            <Slider1 title={"Любители сладостей 🍰🍩🧁"}/>
            <Market title={"Сладости"}/>
            <ClosedMarket title={"Закрытые магазины"}/> 
        </div>
     );
}

export default Cake;