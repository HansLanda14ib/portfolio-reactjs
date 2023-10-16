import {useState, useEffect, useContext} from "react";
import {Link} from "react-scroll";
import {LanguageContext} from "../LanguageContext";
import './ToggleButton.css';
import {ToggleButton} from "primereact/togglebutton"; // Import the CSS file for styling

function Navbar() {

    const [navActive, setNavActive] = useState(false);
    const {language, toggleLanguage} = useContext(LanguageContext);
    const [checked, setChecked] = useState(false);
    const navItems = {
        english: {
            home: 'Home',
            projects: 'Projects',
            about: 'About Me',
            certifications: 'Certifications',
            contact: 'Contact',
        },
        french: {
            home: 'Accueil',
            projects: 'Projets',
            about: 'À propos de moi',
            certifications: 'Certifications',
            contact: 'Contactez-moi',
        },
    };
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo14.png" alt="Logoipsum"/>
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            {navItems[language].home}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >
                            {navItems[language].projects}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >
                            {navItems[language].about}

                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="testimonial"
                            className="navbar--content"
                        >
                            {navItems[language].certifications}
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                {navItems[language].contact}
            </Link>
            {/* <div className="toggle-container">
                <button className={language === 'english' ? 'toggle-btn en' : 'toggle-btn fr'} onClick={toggleLanguage}>
                    {language === 'english' ? 'Switch to French' : 'Passer à l\'anglais'}
                </button>
            </div> */}

            <div className="card flex justify-content-center">
                <ToggleButton onLabel="FR" offLabel="EN" checked={checked} onChange={(e) => setChecked(e.value)}
                              onClick={toggleLanguage}
                              className="w-9rem"/>
            </div>

        </nav>
    );
}

export default Navbar;
