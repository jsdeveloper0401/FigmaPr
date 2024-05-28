
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = ({ count, setCount }) => {
    return (
        <header>
            <nav className="nav">
                <div className="container header-container">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/work" className="nav__link">
                                Works
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/blog"
                                className="nav__link">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/contact" className="nav__link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <button className="toggle" onClick={() => setCount(!count)}>
                        <RxHamburgerMenu />
                    </button>
                    {count && (
                        <div className="box">
                            <ul className="open-navbar-list">
                                <li className="open-navbar-item">
                                    <NavLink
                                        to="/work"
                                        className="open-navbar-link">
                                        Works
                                    </NavLink>
                                </li>
                                <li className="open-navbar-item">
                                    <NavLink
                                        to="/blog"
                                        className="open-navbar-link">
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="open-navbar-item">
                                    <NavLink
                                        to="/contact"
                                        className="open-navbar-link">
                                        Contact
                                    </NavLink>
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
