import ChefCard from "./chefCard";

function ChefsSection() {
    const chefs = [
        {
            name: "Ann Schvets",
            img: "Recipes-App_React/img/chefs/chef-ann-schvets.jpg",
            recipes: "10",
            cuisine: "Greek",
        },
        {
            name: "Anna Terezevich",
            img: "Recipes-App_React/img/chefs/chef-anna-terezevich.jpg",
            recipes: "07",
            cuisine: "European",
        },
        {
            name: "Kampus Sergei",
            img: "Recipes-App_React/img/chefs/chef-kampus.jpg",
            recipes: "14",
            cuisine: "Mexican",
        },
        {
            name: "Morna Tang",
            img: "Recipes-App_React/img/chefs/chef-morna-tang.jpg",
            recipes: "11",
            cuisine: "Korean",
        },
        {
            name: "Tirachard Kumtanom",
            img: "Recipes-App_React/img/chefs/chef-tirachard-kumtanom.jpg",
            recipes: "09",
            cuisine: "Italian",
        },
        {
            name: "Vadim Markin",
            img: "Recipes-App_React/img/chefs/chef-vadim-markin.jpg",
            recipes: "16",
            cuisine: "French",
        },
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our top chefs</h1>
            <div className="chefs-container">
                {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}
                {chefs.map(chef => <ChefCard key={chef.name} chef={chef} />)}
            </div>
        </div>
    )
}

export default ChefsSection;