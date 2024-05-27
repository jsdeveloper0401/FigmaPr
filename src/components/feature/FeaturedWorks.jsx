import "./FeaturedWorks.css";

const FeaturedWorks = ({ works }) => {
    return (
        <section className="feature">
            <div className="container">
                <h4>Featured works</h4>
                <div className="feature__row">
                    {works.map((work, index) => (
                        <div className="feature__row-item" key={index}>
                            <img
                                src={work.imgSrc}
                                alt={work.altText}
                                className="feature-img"
                            />
                            <div className="dashboard">
                                <h3>{work.title}</h3>
                                <div className="dash__desc">
                                    <span>{work.year}</span>
                                    <p>{work.type}</p>
                                </div>
                                <p>{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorks;
