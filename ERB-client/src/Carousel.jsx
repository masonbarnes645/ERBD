import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const Carousel = () => {

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <KeyboardDoubleArrowRightIcon
                className={className}
                style={{ ...style, display: "block", color: "red" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <KeyboardDoubleArrowLeftIcon
                className={className}
                style={{ ...style, display: "block", color: "green" }}
                onClick={onClick}
            />
        );
    }



    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />


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