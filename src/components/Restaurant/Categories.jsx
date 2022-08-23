import {React, useState} from 'react'
import Modal from "../Modals/Modal";

function Categories() {
    const [modalBool, setModalBool] = useState(false)
    const showModal = () => {
        setModalBool(true);
    }
    function setActiveCategory(e){
        // if(e.target.classList.has("category")){
            // e.target.classList.toggle("active-category")
        // }

        console.log(e.target.childNodes[0].childNodes);
  

    }
    //dadasdas
    return (
        <section className="categories">


            <div className="categories-list" onClick={setActiveCategory} >
                <div>
                    <div className="category" >
                        <div>
                            <img src="./assets/icons/categories/discount.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Акции</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/pizza.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Пицца</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/burger.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Бургер</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/sushi.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Суши</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/doner.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Донер</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/buterbrod.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Бутерброд</p>
                    </div>
                    <div className="category" onClick={setActiveCategory}>
                        <div>
                            <img src="./assets/icons/categories/chicken.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Курица</p>
                    </div>
                    <div className="category">
                        <div>
                            <img src="./assets/icons/categories/lahmadjun.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Лахмаджун</p>
                    </div> 
                    <div className="category">
                        <div>
                            <img src="./assets/icons/categories/kebab.jpeg" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Кебап</p>
                    </div>
                    <div className="category">
                        <div>
                            <img src="./assets/icons/categories/shaurma.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Шаурма</p>
                    </div>
                    <div className="category">
                        <div>
                            <img src="./assets/icons/categories/hotdog.png" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Хотдог</p>
                    </div>
                </div>
                <div className="more-cat"  onMouseEnter={() => setModalBool(true)}  onMouseLeave={() => setModalBool(false)}>
                    <div className="category-more">
                        <div>
                            <img src="./assets/icons/arrow.svg" width="32px" height="32px" alt=""/>
                        </div>
                        <p>Еще</p>
                    </div>
                    <Modal active = {modalBool}>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/chicken.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Курица</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/lahmadjun.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Лахмаджун</p>
                        </div> 
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/kebab.jpeg" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Кебап</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/shaurma.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Шаурма</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/hotdog.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Хотдог</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/kebab.jpeg" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Кебап</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/shaurma.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Шаурма</p>
                        </div>
                        <div className="category-more-item">
                            <div>
                                <img src="./assets/icons/categories/hotdog.png" width="38px" height="38px" alt=""/>
                            </div>
                            <p>Хотдог</p>
                        </div>
                    </Modal>
                </div>
        </div>

    </section>
      );
}

export default Categories;