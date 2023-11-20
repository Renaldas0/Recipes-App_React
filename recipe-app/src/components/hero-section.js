import CustomImage from "./customImage";
import { Link } from "react-router-dom";

function HeroSection() {
    const images = [
        "./img/food/img1.jpg",
        "./img/food/img2.jpg",
        "./img/food/img3.jpg",
        "./img/food/img4.jpg",
        "./img/food/img5.jpg",
        "./img/food/img6.jpg",
        "./img/food/img7.jpg",
        "./img/food/img8.jpg",
        "./img/food/img9.jpg",
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What are we about?</h1>
                <p className="info">Our main goals are to allow everyday home cooks to discover their talent by attempting new and fairly non complicated recipes that have been carefully crafted and developed by our top chefs. All information about them can be found on their social medias and we give a brief description in our chefs section.</p>
                <Link to={"/recipes"} className="btn">Explore Recipes</Link>
            </div>
            <div className="col gallery">
                {images.map((img, index) => (
                    <CustomImage key={index} imgSrc={img} pt={"85%"} />
                ))}
            </div>
        </div>
    )
}

export default HeroSection;