import React, {useContext} from "react";
import data from "../../data/index.json";
import {LanguageContext} from "../LanguageContext";

export default function HeroSection() {
    const {language} = useContext(LanguageContext);
    const content = {
        english: {
            title: 'Hi, I\'m Badreddine',
            subtitle: 'A final-year ',
            subtitle2: 'Computer Engineering and Networks Student',
            description: 'I hold a Master of Science in Chemistry. And have recently made a career shift to become a Computer Engineer and I\'m now ready to work on real projects.',
            resume: 'My Resume'
        }, french: {
            title: 'Bonjour, je suis Badreddine',
            subtitle: "Étudiant en 5ème année ",
            subtitle2: 'Ingénierie Informatique et Réseaux',
            description: 'Je suis titulaire d\'un master en chimie. J\'ai récemment opéré une reconversion professionnelle pour devenir ingénieur d\'Informatique et je suis maintenant prêt à travailler sur des projets concrets.',
            resume: 'Mon CV'
        },
    };
    return (<section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">{content[language].title}</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">{content[language].subtitle}</span>{" "}
                    <br/>
                    {content[language].subtitle2}
                </h1>
                <p className="hero--section-description">
                    {content[language].description}

                </p>

            </div>
            <br/>
            <a href={data.CvLink}
               style={{textDecoration: "none"}}>
                <button className="btn btn-primary" style={{display: "flex", alignItems: "center"}}>
        <span style={{marginRight: "8px"}}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V11H17C18.933 11 20.5 12.567 20.5 14.5C20.5 16.433 18.933 18 17 18H16.9C16.3477 18 15.9 18.4477 15.9 19C15.9 19.5523 16.3477 20 16.9 20H17C20.0376 20 22.5 17.5376 22.5 14.5C22.5 11.7793 20.5245 9.51997 17.9296 9.07824C17.4862 6.20213 15.0003 4 12 4C8.99974 4 6.51381 6.20213 6.07036 9.07824C3.47551 9.51997 1.5 11.7793 1.5 14.5C1.5 17.5376 3.96243 20 7 20H7.1C7.65228 20 8.1 19.5523 8.1 19C8.1 18.4477 7.65228 18 7.1 18H7C5.067 18 3.5 16.433 3.5 14.5C3.5 12.567 5.067 11 7 11H8V10ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16.5858L9.70711 15.2929C9.31658 14.9024 8.68342 14.9024 8.29289 15.2929C7.90237 15.6834 7.90237 16.3166 8.29289 16.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L15.7071 16.7071C16.0976 16.3166 16.0976 15.6834 15.7071 15.2929C15.3166 14.9024 14.6834 14.9024 14.2929 15.2929L13 16.5858V11Z"
                      fill="#ffffff"/>
            </svg>
        </span>
                    <span>{content[language].resume}</span>
                </button>
            </a>


        </div>
        <div className="hero--section--img">
            <img src="./img/hero2.svg" alt="Hero Section"/>
        </div>
    </section>);
}
