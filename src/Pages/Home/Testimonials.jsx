import data from "../../data/index.json";

export default function Testimonial() {
    return (

        <section className="testimonial--section" id="testimonial">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Certifications</p>
                    <h2 className="sections--heading">Academic Certifications</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.testimonial?.map((item, index) => (<div key={index} className="portfolio--section--img">
                    <h3 className="portfolio--section--title" style={{"text-align": "center"}}>
                        {item.title}
                    </h3>
                    <br/>
                    <div className="portfolio--section--img">
                        <img src={item.src} height={500} width={500} alt=" Avatar"/>
                    </div>
                </div>))}
            </div>
        </section>);
}
