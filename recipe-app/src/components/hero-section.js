import CustomImage from "./customImage";

function HeroSection() {
    const images = [
        "/img/food/img-1.jpg",
        "/img/food/img-2.jpg",
        "/img/food/img-3.jpg",
        "/img/food/img-4.jpg",
        "/img/food/img-5.jpg",
        "/img/food/img-6.jpg",
        "/img/food/img-7.jpg",
        "/img/food/img-8.jpg",
        "/img/food/img-9.jpg",
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
                    <CustomImage key={index} imgSrc={img} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}

export default HeroSection;