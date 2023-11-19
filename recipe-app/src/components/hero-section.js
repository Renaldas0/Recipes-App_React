import CustomImage from "./customImage";

function HeroSection() {
    const images = [
        "./img/food/img1.jpg",
        "./img/food/img2.jpg",
        "./img/food/img3.jpg",
        "/img/food/img4.jpg",
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
                <p className="info">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <button className="btn">Explore Recipes</button>
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