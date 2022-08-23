import {React} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider2({title}) {
    const options = {
        margin:24,
        items:3,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1300:{
                items:3
            },
        }
    }

    return ( 
        <section className="carousels">
            <div className="car-head">
                <h1>{title}</h1>
                <p>Все</p>
            </div> 
            <OwlCarousel {...options} className="owl-carousel owl-theme carousel-2" >
                <div className="owl-sld-item">
                    <img src="./assets/images/slider2/slider1.jpg" alt=""/>
                    <div>
                        <p> Choco Port</p>
                        <div>
                            <div>
                                <svg _ngcontent-fooderos-client-c143="" viewBox="0 0 24 24" className="star" width= "24px" height="24px"><path _ngcontent-fooderos-client-c143="" fill="#ffc81b" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                <span>5.0</span>
                            </div>
                            <p>Десерт</p>
                        </div>
                    </div>
                </div> 
                 <div className="owl-sld-item">
                    <img src="./assets/images/slider2/slider2.jpg" alt=""/>
                    <div>
                        <p> Choco Port</p>
                        <div>
                            <div>
                                <svg _ngcontent-fooderos-client-c143="" viewBox="0 0 24 24" className="star"  width= "24px" height="24px"><path _ngcontent-fooderos-client-c143="" fill="#ffc81b" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                <span>5.0</span>
                            </div>
                            <p>Десерт</p>
                        </div>
                    </div>
                </div>
                <div className="owl-sld-item">
                    <img src="./assets/images/slider2/slider3.jpg" alt=""/>
                    <div>
                        <p> Choco Port</p>
                        <div>
                            <div>
                                <svg _ngcontent-fooderos-client-c143="" viewBox="0 0 24 24" className="star"  width= "24px" height="24px"><path _ngcontent-fooderos-client-c143="" fill="#ffc81b" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                <span>5.0</span>
                            </div>
                            <p>Десерт</p>
                        </div>
                    </div>
                </div>
                <div className="owl-sld-item">
                    <img src="./assets/images/slider2/slider4.jpg" alt=""/>
                    <div>
                        <p> Choco Port</p>
                        <div>
                            <div>
                                <svg _ngcontent-fooderos-client-c143="" viewBox="0 0 24 24" className="star"  width= "24px" height="24px"><path _ngcontent-fooderos-client-c143="" fill="#ffc81b" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                <span>5.0</span>
                            </div>
                            <p>Десерт</p>
                        </div>
                    </div>
                </div>
                <div className="owl-sld-item">
                    <img src="./assets/images/slider2/slider5.jpg" alt=""/>
                    <div>
                        <p> Choco Port</p>
                        <div>
                            <div>
                                <svg _ngcontent-fooderos-client-c143="" viewBox="0 0 24 24" className="star"  width= "24px" height="24px"><path _ngcontent-fooderos-client-c143="" fill="#ffc81b" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                <span>5.0</span>
                            </div>
                            <p>Десерт</p>
                        </div>
                    </div>
                </div> 
            </OwlCarousel>
    </section>
     );
}

export default Slider2;