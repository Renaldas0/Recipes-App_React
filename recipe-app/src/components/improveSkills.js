function ImproveSkills() {
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Compose your own recipes",
        "Learn nutrition facts",
        "Receive cooking tips & tricks",
        "Get ranked",
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/food/img11.jpg" alt="" />
            </div>

            <div className="col typography">
                <h1 className="title">Improve your culinary skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Signup now</button>
            </div>

        </div>
    );
};

export default ImproveSkills;