import {LanguageContext} from "../LanguageContext";
import {useContext} from "react";

export default function AboutMe() {
    const {language} = useContext(LanguageContext);

    const content = {
        english: {
            title: 'About',
            heading: 'About Me',
            description: `I am currently in my final year at EMSI Marrakech, focusing on Computer Engineering and Networks. 
            With a Master's degree in Materials Science, I successfully transitioned into Software Development.`,
            description2: `Alongside my studies, I worked as an IT manager at CPGE Ibn Ghazi center, overseeing all technology-related functions. Previously, 
            I was the education manager at the same center, supporting educational programs and ensuring effective learning for students and adequate resources for teachers. 
           `,
            description3: ` In these roles, I apply leadership skills, contributing to the center's growth and fostering a supportive learning environment.`
        }, french: {
            title: 'À propos', heading: 'À propos de moi',
            description: `
            Je suis titulaire d'un master en sciences des matériaux et je suis actuellement en 5ème année - ingénierie informatique et réseaux à l'EMSI Marrakech.`,
            description2: `
            En parallèle de mes études, j'occupe le poste de Responsable Informatique au centre CPGE Ibn Ghazi, supervisant toutes les fonctions liées à la technologie. 
            Auparavant, j'ai été Rresponsable Scolarité dans le même centre, soutenant les programmes éducatifs et veillant à un apprentissage efficace pour les étudiants ainsi qu'à des ressources adéquates pour les enseignants. 
            
            `,
            description3: `Dans ces rôles, j'applique des compétences en leadership, contribuant à la croissance du centre et favorisant un environnement d'apprentissage favorable.`
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
            <img src="./aboutme.png" alt="About Me"/>
        </div>

    </section>);
}
