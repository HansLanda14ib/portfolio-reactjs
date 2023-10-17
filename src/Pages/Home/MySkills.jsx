import {useContext} from "react";
import {LanguageContext} from "../LanguageContext";
import data_en from '../../data/index.json';
import data_fr from '../../data/dataFr.json';

export default function MySkills() {
    const {language} = useContext(LanguageContext);
    const data = language === 'english' ? data_en : data_fr;
    const sectionTitles = {
        english: {
            title: 'My Skills',
            heading: 'My Expertise',
        },
        french: {
            title: 'Mes Compétences',
            heading: 'Techniques',
        },
    };
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">{sectionTitles[language].title}</p>
                <h2 className="skills--section--heading">{sectionTitles[language].heading}</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain"/>
                        </div>
                        <div key={item.id} className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            {Array.isArray(item.description) ? (
                                item.description.map((desc, index) => (
                                    <p key={index} className="skills--section--description">
                                        {desc}
                                    </p>
                                ))
                            ) : (
                                <p className="skills--section--description">{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
