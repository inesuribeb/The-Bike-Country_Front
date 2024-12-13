import "./Contact.css";
import NavBar from "../../components/navbar/NavBar";
import ContactForm from "../../components/formulario/Formulario";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

function Contact() {

    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        experience: "",
        hearAboutUs: ""

    })

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <div className ="contact-container">
                    <div className="contact-page">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="form">
                        <ContactForm
                            initialClient={client}
                            onSubmit={setClient}
                        />
                    </div>

                </div>
                <div className="contact-details-container">
                <ContactDetails />
                </div>

            </main>

        </>
    )


}

export default Contact;