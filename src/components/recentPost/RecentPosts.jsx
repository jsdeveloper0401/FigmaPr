import "./recentPost.css";
const RecentPosts = () => {
    return (
        <section className="posts">
            <div className="container">
                <div className="posts__desc">
                    <h4 className="posts__title">Recent posts</h4>
                    <a href="#" className="posts__link">
                        View all
                    </a>
                </div>
                <div className="posts__row">
                    <div className="posts__card">
                        <h3>Making a design system from scratch</h3>
                        <div className="date">
                            12 Feb 2020 <span>|</span> Design, Pattern
                        </div>
                        <p className="posts__text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className="posts__card">
                        <h3>Creating pixel perfect icons in Figma</h3>
                        <div className="date">
                            12 Feb 2020 <span>|</span> Design, Pattern
                        </div>
                        <p className="posts__text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
