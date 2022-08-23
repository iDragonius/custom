import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function SliderMain() {
    let options = {
        loop:true,
        margin:32,
        items:4,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            "0":{
                items:1
            },
            "500":{
                items:2
            },
            "800":{
                items:3
            },
            "1300":{
                items:4
            }
        }
    }
    return (
        <OwlCarousel {...options} className="owl-carousel owl-theme" id="carousel-1">
        <div className="carousel-item"> 
            <div className="item-top">
                <div>
                    40%
                </div>
                <p>Papa Qurman</p>
            </div>
            <img src="./assets/images/slider1/slider1.jpg" alt=""/>
            <div className="item-bottom">
                <p> Qurmanlıq bizim işimizdir </p>
            </div>
        </div>
        <div className="carousel-item"> 
            <div className="item-top">
                <div>
                    40%
                </div>
                <p>  Bibari Çiyköftə </p>
            </div>
            <img src="./assets/images/slider1/slider2.jpg" alt=""/>
            <div className="item-bottom">
                <p> Həmişə yeri var  </p>
            </div>
        </div>
        <div className="carousel-item"> 
            <div className="item-top">
                <div>
                    40%
                </div>
                <p> Sushi Market Həzi Aslanov </p>
            </div>
            <img src="./assets/images/slider1/slider3.jpg" alt=""/>
            <div className="item-bottom">
                <p>  Yalnız sevimli dad </p>
            </div>
        </div>
        <div className="carousel-item"> 
            <div className="item-top">
                <div>
                    40%
                </div>
                <p>Little Tokyo </p>
            </div>
            <img src="./assets/images/slider1/slider4.jpg" alt=""/>
            <div className="item-bottom">
                <p>  Şərq mətbəxinin inciləri </p>
            </div>
        </div>
        <div className="carousel-item"> 
            <div className="item-top">
                <div>
                    40%
                </div>
                <p> Boranı </p>
            </div>
            <img src="./assets/images/slider1/slider5.jpg" alt=""/>
            <div className="item-bottom">
                <p>  Sizə daha yaxın  </p>
            </div>
        </div>
        </OwlCarousel>


      );
}

export default SliderMain;