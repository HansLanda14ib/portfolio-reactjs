import {LanguageContext} from "../LanguageContext";
import {useContext} from "react";

export default function AboutMe() {
    const {language} = useContext(LanguageContext);

    const content = {
        english: {
            title: 'About',
            heading: 'About Me',
            description: `Currently in my final year at EMSI Marrakesh, where I have been diligently expanding my expertise in Computer Engineering. I hold a Master's degree in Materials Science and have successfully transitioned into the field of Software Development, with valuable experience and newfound skills.

In addition to my studies, I am also working as the Education Manager at the CPGE IbnGhazi center, where I oversee various educational programs and initiatives. Additionally, I serve as a Python tutor at the same center, where I contribute to fostering a strong understanding of programming concepts among the students. In these roles, I have the opportunity to apply my leadership skills and contribute to the growth and success of the center, nurturing an environment that promotes learning and development.`,
        },
        french: {
            title: 'À propos',
            heading: 'À propos de moi',
            description: `Actuellement en dernière année à l'EMSI Marrakech, où j'élargis diligemment mon expertise en l'Ingénierie Informatique. Je suis titulaire d'un master en science des matériaux et j'ai réussi à me reconvertir dans le domaine du développement de logiciels, avec une expérience précieuse et de nouvelles compétences.

En plus de mes études, je travaille également en tant que responsable de l'éducation au centre CPGE IbnGhazi, où je supervise différents programmes éducatifs et initiatives. De plus, je suis tuteur en Python au même centre, où je contribue à favoriser une bonne compréhension des concepts de programmation chez les étudiants. Dans ces rôles, j'ai l'opportunité d'appliquer mes compétences en leadership et de contribuer à la croissance et au succès du centre, en favorisant un environnement qui encourage l'apprentissage et le développement.`,
        },
    };

    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">{content[language].title}</p>
                    <h1 className="skills-section--heading">{content[language].heading}</h1>
                    <p className="hero--section-description">
                        {content[language].description}

                    </p>

                </div>
            </div>
            <div className="about--section--img">
                <img src="./aboutme.png" alt="About Me"/>
            </div>

        </section>
    );
}
