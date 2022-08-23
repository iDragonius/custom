import Categories from "../Shop/Categories";
import Market from "../Market";
import ClosedMarket from "../ClosedMarket";
import Slider1 from "../Shop/Slider1";


function Shop() {
    return ( 
        <div>
            <div class="container">
                <h1 >Категории</h1>
            </div>
            <Categories/>
            <Slider1 title={"Любители сладостей 🍰🍩🧁"}/>
            <Market title={"Маркет"}/>
            <ClosedMarket title={"Закрытые магазины"}/>
        </div>
     );
}

export default Shop;