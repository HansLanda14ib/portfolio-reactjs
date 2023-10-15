import data from "../../data/index.json";
import {Card} from 'primereact/card';
import {Carousel} from "primereact/carousel";
import {useContext} from "react";
import {LanguageContext} from "../LanguageContext";
import data_en from "../../data/index.json";
import data_fr from "../../data/dataFr.json";

export default function Testimonial() {
    const {language} = useContext(LanguageContext);

    const certificationTemplate = (certification) => {
        return (
            <Card

                style={{marginBottom: '1rem', margin: '1rem'}}
            >
                <img src={certification.src} alt={certification.title} style={{width: '100%'}}/>
            </Card>

        );
    };
    return (

        <section className="testimonial--section" id="testimonial">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Certifications</p>
                    <h2 className="sections--heading">{language === 'english' ? 'University Certificates' : 'Certificats Universitaires'}</h2>
                </div>
            </div>
            <div className="portfolio--section--container">

                <Carousel
                    value={data.testimonial}
                    itemTemplate={certificationTemplate}
                    numVisible={3}
                    numScroll={2}
                    circular
                    nextIco={<i className="pi pi-chevron-right"></i>}
                    prevIco={<i className="pi pi-chevron-left"></i>}
                    responsiveOptions={[
                        {
                            breakpoint: '1024px',
                            numVisible: 3,
                            numScroll: 3,
                        },
                        {
                            breakpoint: '768px',
                            numVisible: 2,
                            numScroll: 2,
                        },
                        {
                            breakpoint: '560px',
                            numVisible: 1,
                            numScroll: 1,
                        },
                    ]}
                />
            </div>
        </section>);
}
