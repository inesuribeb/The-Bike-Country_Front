import PlusButton from "../../components/button/PlusButton";

import './ContactDetails.css';

function ContactDetails() {
    const includedItems = [
        { 
            id: 1, 
            text: "",
            description: ""
        }];

        return (
            <div className="contact-details-container">
                <div>
                    <h1>FAQS</h1>   {/* meter un desplegable */}
                </div>
                <div className="contact-details-section">
                    <h2 className="contact-details-title">Pricing & Financial</h2>
                    <div className="contact-details-list">
                        {includedItems.map((item) => (
                            <div key={item.id} className="contact-details-item">
                                <div className="contact-details-item__header">
                                    <p className="contact-details-item__text">{item.text}</p>
                                    <PlusButton className="contact-details-item__button" />
                                </div>
                                <div className="contact-details-item__description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact-details-section">
                    <h2 className="contact-details-title">Journeys</h2>
                    <div className="contact-details-list">
                        {includedItems.map((item) => (
                            <div key={item.id} className="contact-details-item">
                                <div className="contact-details-item__header">
                                    <p className="contact-details-item__text">{item.text}</p>
                                    <PlusButton className="contact-details-item__button" />
                                </div>
                                <div className="contact-details-item__description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact-details-section">
                    <h2 className="contact-details-title">While travelling</h2>
                    <div className="contact-details-list">
                        {includedItems.map((item) => (
                            <div key={item.id} className="contact-details-item">
                                <div className="contact-details-item__header">
                                    <p className="contact-details-item__text">{item.text}</p>
                                    <PlusButton className="contact-details-item__button" />
                                </div>
                                <div className="contact-details-item__description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default ContactDetails;
           


