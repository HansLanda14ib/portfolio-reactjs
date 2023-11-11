import {LanguageContext} from "../LanguageContext";
import {useContext} from "react";

export default function AboutMe() {
    const {language} = useContext(LanguageContext);

    const content = {
        english: {
            title: 'About',
            heading: 'About Me',
            description: `Engineering student in the 5th year, specializing in Computer Engineering and Networks at EMSI in Marrakech.`,
            description2: `After obtaining my master's degree in chemistry in 2017, I worked for 3 years as Educational Manager at CPGE Ibn Ghazi. 
           `,
            description3: `During these 3 years, I demonstrated my work ethic, problem-solving skills, and ability to work in a team by managing the administration and computer systems of the center.`
        }, french: {
            title: 'À propos', heading: 'À propos de moi',
            description: `
            Étudiant ingénieur en 5ème année, filière Ingénierie Informatique et Réseaux à l'EMSI de Marrakech.`,
            description2: `
            Après l'obtention de mon diplôme de master en chimie en 2017, j'ai travaillé pendant 3 ans en tant que responsable de la scolarité au centre CPGE Ibn Ghazi,  
`,
            description3: `Au cours de ces 3 ans, j'ai pu démontrer ma force de travail, ma capacité à résoudre les problèmes et ma capacité à travailler en équipe en gérant l'administration et les systèmes informatiques du centre.`
        },
    };

    return (<section id="AboutMe" className="about--section">
        <div className="about--section--box">
            <div className="hero--section--content">
                <p className="section--title">{content[language].title}</p>
                <h1 className="skills-section--heading">{content[language].heading}</h1>
                <p className="hero--section-description">
                    {content[language].description}

                </p>
                <p className="hero--section-description">
                    {content[language].description2}

                </p>
                <p className="hero--section-description">
                    {content[language].description3}

                </p>

            </div>
        </div>
        <div className="about--section--img">
            <img src="./aboutme1.png" alt="About Me"/>
        </div>

    </section>);
}
