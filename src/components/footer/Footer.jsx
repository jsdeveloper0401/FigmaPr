import "./Footer.css";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__link-items">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="footer__link"
                        rel="noopener noreferrer">
                        <FaFacebookSquare className="icon facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="footer__link"
                        rel="noopener noreferrer">
                        <FaInstagram className="icon instagram" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="footer__link"
                        rel="noopener noreferrer">
                        <FaTwitter className="icon twitter" />
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="footer__link"
                        rel="noopener noreferrer">
                        <FaLinkedin className="icon linkedin" />
                    </a>
                </div>
                <p className="footer__text">
                    Copyright & 2020 All right reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
