import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import { useOutletContext } from 'react-router-dom';

const Carousel = () => {
    const { portfolios } = useOutletContext()
    console.log(portfolios)

    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 4000


    };
    return (
        <div className='slider-container' >
            <Slider {...settings}>
                <div>
                    <img className="land-img" width={'1080px'} height={'auto'} src='src/assets/landing1.jpeg' />
                </div>
                <div>
                    <img className="land-img" width={'1080px'} height={'auto'} src='src/assets/landing2.jpeg' />
                </div>
                <div>
                    <img className="land-img" width={'1080px'} height={'auto'} src='src/assets/landing3.jpeg' />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel