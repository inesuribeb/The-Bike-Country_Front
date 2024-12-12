import { useState } from "react";
import "./Formulario.css";
function ContactForm({ initialClient, onSubmit }) {
    const [client, setClient] = useState(initialClient);

    /* function handleChange(e) {
        const { name, value } = e.target;
        setClient(oldClient => ({ ...oldClient, [name]: value }));
    }*/

    function handleFirstName(e) {
        const newFirstName = e.target.value;

        setClient(oldClient => {

            const newClient = { ...oldClient };
            newClient.firstName = newFirstName;
            return newClient;
        })

    }

    function handleLastName(e) {
        const newLastName = e.target.value;

        setClient(oldClient => {

            const newClient = { ...oldClient };
            newClient.lastName = newLastName;
            return newClient;
        })

    }

    function handleEmail(e) {
        const newEmail = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.email = newEmail;
            return newClient;
        })
    }

    function handlePhone(e) {
        const newPhone = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.phone = newPhone;
            return newClient;
        })
    }

    function handleExperience(e) {
        const newExperience = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.experience = newExperience;
            return newClient;
        })
    }

    function handleMessage(e) {
        const newMessage = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.message = newMessage;
            return newClient;
        })
    }

    function handleHearAboutUs(e) {
        const newHearAboutUs = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.message = newMessage;
            return newClient;
        })
    }



    /*function handleExperience(e) {
        const newExperience = e.target.value;
        setClient(oldClient => ({ ...oldClient, experience: newExperience }));
    } */


    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(client);
        setClient({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            experience: "",
            hearAboutUs: "",
        });

    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="input-section">
                <div className="FirstName">
                    <label htmlFor="FirstName">First Name <required>*</required></label>
                    <input
                        type="text"
                        name="FirstName"
                        value={client.firstName}
                        onChange={handleFirstName}
                        required
                    />
                </div>
                <div className="LastName">
                    <label htmlFor="LastName">Last Name <required>*</required></label>
                    <input
                        type="text"
                        name="LastName"
                        value={client.lastName}
                        onChange={handleLastName}
                        required
                    />
                </div>
            </div>
            <div className="input-section">
                <div className="Email">
                    <label htmlFor="email">Email <required>*</required></label>
                    <input
                        type="email"
                        name="email"
                        value={client.email}
                        onChange={handleEmail}
                        required
                    />
                </div>
                <div className="Phone">
                    <label htmlFor="phone">Phone <required>*</required></label>
                    <input
                        type="text"
                        name="phone"
                        value={client.phone}
                        onChange={handlePhone}
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Which experience are you interested in? <required>*</required></label>
                <div className="radio-group" >
                    <div class="radio-option">
                        <input
                            type="radio"
                            name="experience"
                            value="Experience 1"
                            checked={client.experience === "Experience 1"}
                            onChange={handleExperience}
                        />
                        <label for="experience1">Experience 1</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            name="experience"
                            value="Experience 2"
                            checked={client.experience === "Experience 2"}
                            onChange={handleExperience}
                        />

                        <label for="experience2">Experience 2</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            name="experience"
                            value="Experience 3"
                            checked={client.experience === "Experience 3"}
                            onChange={handleExperience}
                        />
                        <label for="experience3">Experience 3</label>
                    </div>
                </div>


                <div className="input-select-option">
                    <label htmlFor="hearAboutUs">How did you hear about us?</label>
                    <select
                        name="hearAboutUs"
                        value={client.hearAboutUs || ""}
                        onChange={handleHearAboutUs}
                        required
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Friend suggestion">Friend suggestion</option>
                        <option value="Repeating with you">Repeating with you</option>
                        <option value="An event">An event</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Advertising">Advertising</option>
                        <option value="Other">Other</option>

                    </select>

                </div>

                <div className="input-message">
                    <div className="message">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            type="text"
                            name="message"
                            value={client.message}
                            onChange={handleMessage}
                            required
                        />
                    </div>
                </div>



                <div>
                    <button className="send-button">Send</button>
                </div>
            </div>
        </form>

    )

}
export default ContactForm; 
