import PreviousSearches from "../components/previousSearches";
import RecipeCard from "../components/recipeCard";

function Recipes() {
    const recipes = [
        {
            title: "Shrimp fried rice",
            image: "/img/food/img1.jpg",
            authorImg: "/img/chefs/chef-morna-tang.jpg",
        },
        {
            title: "Savoury Sweet Pancakes",
            image: "/img/food/img2.jpg",
            authorImg: "/img/chefs/chef-anna-terezevich.jpg",
        },
        {
            title: "Mushroom Noodle Soup",
            image: "/img/food/img3.jpg",
            authorImg: "/img/chefs/chef-morna-tang.jpg",
        },
        {
            title: "Shrimp Noodle Soup",
            image: "/img/food/img4.jpg",
            authorImg: "/img/chefs/chef-morna-tang.jpg",
        },
        {
            title: "Classic Ceasar Salad",
            image: "/img/food/img5.jpg",
            authorImg: "/img/chefs/chef-ann-schvets.jpg",
        },
        {
            title: "Steak",
            image: "/img/food/img6.jpg",
            authorImg: "/img/chefs/chef-vadim-markin.jpg",
        },
        {
            title: "Almost English Breakfast",
            image: "/img/food/img7.jpg",
            authorImg: "/img/chefs/chef-anna-terezevich.jpg",
        },
        {
            title: "Shrimp Spaghetti",
            image: "/img/food/img8.jpg",
            authorImg: "/img/chefs/chef-tirachard-kumtanom.jpg",
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