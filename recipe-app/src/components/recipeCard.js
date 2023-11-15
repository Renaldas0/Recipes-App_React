import CustomImage from "./customImage";

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-description">Lorem ipsum is simply dummy text used to fill in paragrapghs.</p>
                <a className="view-recipe-btn" href="#!">View Recipe</a>
            </div>
        </div>
    )
}

export default RecipeCard;