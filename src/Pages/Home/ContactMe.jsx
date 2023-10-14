import emailjs from '@emailjs/browser';
import {useRef} from "react";
import {Notify} from "notiflix";


export default function ContactMe() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jumcdjm', 'template_0yydyw3', form.current, 'AuSkL9D26DsmEvD3X')
            .then((result) => {
                console.log(result.text);
                Notify.success("Email has been sent successfully");
            }, (error) => {
                console.log(error.text);
                Notify.failure("Error sending email");
            });

        e.target.reset()
    };
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">

                    Send me a message here, or at <strong>badreddineibzazne@gmail.com</strong>.
                </p>
            </div>
            <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">phone number</span>
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
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                    />
                </label>

                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    );
}
