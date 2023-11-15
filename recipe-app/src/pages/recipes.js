import PreviousSearches from "../components/previousSearches";
import RecipeCard from "../components/recipeCard";

function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img1.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img2.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img3.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img4.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img5.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img6.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img7.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/food/img8.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
    ].sort(() => Math.random() - 0.5);

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (<RecipeCard key={index} recipe={recipe} />))}

            </div>
        </div>
    )
}

export default Recipes;