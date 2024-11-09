import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import { useOutletContext } from 'react-router-dom';

const Carousel = () => {
    const { portfolios } = useOutletContext()
    console.log(portfolios)
    
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
                <div>
                    <img src='src/assets/Camino_1.jpg' />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel