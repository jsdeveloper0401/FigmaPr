import "./blog.css";

const Blog = () => {
    const posts = [
        {
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            tags: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            tags: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            tags: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];

    return (
        <section className="list">
            <h1>Blog</h1>
            <div className="boxes">
                {posts.map((post, index) => (
                    <article key={index} className="box">
                        <h2 className="box__title">{post.title}</h2>
                        <div className="data">
                            <p>{post.date}</p>
                            <div className="slash"></div>
                            <h4>{post.tags}</h4>
                        </div>
                        <p className="box__description">{post.description}</p>
                        {index < posts.length - 1 && (
                            <div className="line"></div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;
