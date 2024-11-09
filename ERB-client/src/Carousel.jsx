import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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