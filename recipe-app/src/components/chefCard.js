function ChefCard({ chef }) {
    return (
        <div className="chef-card">
            <img src={chef.image} alt="" />
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-card-description">{chef.description}</p>
            </div>
        </div>
    )
}

export default ChefCard;