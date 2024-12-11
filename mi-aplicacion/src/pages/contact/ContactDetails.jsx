import PlusButton from "../../components/button/PlusButton";

import './ContactDetails.css';

function ContactDetails() {
    const includedItemsPricingAndFinancial = [
        { 
            id: 1, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        },
        { 
            id: 2, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        },
        { 
            id: 3, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        },
        { 
            id: 4, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        }];

    const includedItemsJourneys = [
        { 
            id: 5, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        },
        { 
            id: 6, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        }];

    const includedItemsWhileTraveling = [
        { 
            id: 7, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        },
        { 
            id: 8, 
            text: "lorem impsum ",
            description: "respuesta lorem ipsum"
        }];
        
function HandleDescription () {

}

        return (
            <div className="contact-details-container">
                <div>
                    <h1>FAQS</h1>   {/* meter un desplegable */}
                </div>
                <div className="contact-details-section">
                    <h2 className="contact-details-title">Pricing & Financial</h2>
                    <div className="contact-details-list">
                        {includedItemsPricingAndFinancial.map((item) => (
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
                        {includedItemsJourneys.map((item) => (
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
                        {includedItemsWhileTraveling.map((item) => (
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
           


