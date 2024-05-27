
import Hero from "../../assets/hero-img.png";
import "./hero.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__row">
                    <div className="hero__left">
                        <h1 className="hero__left-title">
                            Hi, I am John,
                            <br />
                            Creative Technologist
                        </h1>
                        <p className="hero__left-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                        <button type="button" className="hero__btn">
                            Download Resume
                        </button>
                    </div>
                    <div className="hero__right">
                        <img
                            src={Hero}
                            alt="Hero"
                            className="hero__right-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
