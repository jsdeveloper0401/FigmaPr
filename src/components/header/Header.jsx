import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = ({ count, setCount }) => {
    return (
        <header>
            <nav className="nav">
                <div className="container header-container">
                    <ul className="nav__list">
                        <NavLink to="/work" className="nav__item">
                            Works
                        </NavLink>
                        <li className="nav__item">
                            <a
                                href="https://js-blog-abdukarimov-muxriddin.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav__link">
                                Blog
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button className="toggle" onClick={() => setCount(!count)}>
                        <RxHamburgerMenu />
                    </button>
                    {count && (
                        <div className="box">
                            <ul className="open-navbar-list">
                                <li className="open-navbar-item">
                                    <a href="#" className="open-navbar-link">
                                        Works
                                    </a>
                                </li>
                                <li className="open-navbar-item">
                                    <a href="#" className="open-navbar-link">
                                        Blog
                                    </a>
                                </li>
                                <li className="open-navbar-item">
                                    <a href="#" className="open-navbar-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
