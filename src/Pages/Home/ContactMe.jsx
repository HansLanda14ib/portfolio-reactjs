import emailjs from '@emailjs/browser';
import {useContext, useRef} from "react";
import {Notify} from "notiflix";
import {LanguageContext} from "../LanguageContext";


export default function ContactMe() {
    const form = useRef();
    const {language} = useContext(LanguageContext);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jumcdjm', 'template_0yydyw3', form.current, 'AuSkL9D26DsmEvD3X')
            .then((result) => {
                //console.log(result.text);
                Notify.success(language === 'english' ? "Email has been sent successfully" : "L'e-mail a été envoyé avec succès");
            }, (error) => {
                //console.log(error.text);
                Notify.failure(language === 'english' ? "Error sending email" : "Erreur lors de l'envoi de l'e-mail");
            });

        e.target.reset()
    };
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">{language === 'english' ? "Get In Touch" : "Prenez contact"}</p>
                <h2>{language === 'english' ? "Contact Me" : "Contactez-moi"}</h2>
                <p className="text-lg">
                    {language === 'english' ? "Send me a message here, or at " : "Envoyez-moi un message ici, ou à "}
                    <strong>badreddineibzazne@gmail.com</strong>.
                </p>
            </div>
            <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">{language === 'english' ? "First name" : "Prénom"}</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">{language === 'english' ? "Last name" : "Nom"}</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">{language === 'english' ? "Email" : "Email"}</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">{language === 'english' ? "Phone Number" : "Télephone"}</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                </div>

                <label htmlFor="message" className="contact--label">
                    <span className="text-md">{language === 'english' ? "Message" : "Message"}</span>
                    <textarea
                        className="contact--input text-md"
                        name="message"
                        rows="8"
                        placeholder={language === 'english' ? "Type your message..." : "Tapez votre message..."}
                    />
                </label>

                <div>
                    <button
                        className="btn btn-primary contact--form--btn">{language === 'english' ? "Send" : "Envoyer"}</button>
                </div>
            </form>
        </section>
    );
}
