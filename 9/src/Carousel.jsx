import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Carousel = ({images}) => {
    const [first, setFirst]   = React.useState(" active");
    const [second, setSecond] = React.useState("");
    const [third, setThird]   = React.useState("");

    const btnNext = () => {
        if (first === " active") {
            setFirst("");
            setSecond(" active");
        }
        else if (second === " active") {
            setSecond("");
            setThird(" active");
        }
        else if (third === " active") {
            setThird("");
            setFirst(" active");
        }
    }

    const btnPrev = () => {
        if (first === " active") {
            setFirst("");
            setThird(" active");
        }
        else if (second === " active") {
            setSecond("");
            setFirst(" active");
        }
        else if (third === " active") {
            setThird("");
            setSecond(" active");
        }
    }

    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item${first}`}>
                    <img alt="" className="d-block w-100" src={images[0]} />
                </div>
                <div className={`carousel-item${second}`}>
                    <img alt="" className="d-block w-100" src={images[1]}/>
                </div>
                <div className={`carousel-item${third}`}>
                    <img alt="" className="d-block w-100" src={images[2]}/>
                </div>
            </div>
            <button
                    onClick={btnPrev}
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
            </button>
            <button
                    onClick={btnNext}
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
// END
