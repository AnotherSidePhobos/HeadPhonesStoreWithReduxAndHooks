import React from 'react'
import carusel1 from './../../img/1.png';
import carusel2 from './../../img/2.png';
import carusel3 from './../../img/3.png';

const Carusel = () => {
    return (
        <div >
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item">
                    <img src={carusel1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item active">
                    <img src={carusel2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={carusel3} className="d-block w-100" alt="..."/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
        </div>

    )
}

export default Carusel
