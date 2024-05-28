import React from "react";
import "./FeaturedWorks.css";

const FeaturedWorks = ({ works }) => {
    return (
        <section className="featured-works">
            <div className="container">
                <h4>Featured works</h4>
                <div className="featured-works__row">
                    {works.length > 0 ? (
                        works.map((work) => (
                            <div className="featured-works__item" key={work.id}>
                                <img
                                    src={work.imgSrc}
                                    alt={work.altText}
                                    className="featured-works__img"
                                />
                                <div className="featured-works__dashboard">
                                    <h3>{work.title}</h3>
                                    <div className="featured-works__desc">
                                        <p className="span">{work.year}</p>
                                        <p>{work.type}</p>
                                    </div>
                                    <p>{work.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No featured works available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorks;
