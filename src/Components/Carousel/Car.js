import carImg from "../../Assets/Carousel.jpg";
import "./car.css";

function Car(){
    return(
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={carImg} class="d-block w-100" id="img-car"/>
                    <div className="carousel-caption cap">
                        <h1 id="text">
                            Driven by data science. Grounded in psychological principles.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car;