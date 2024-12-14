import React, { useState } from 'react';
import { updateClient } from '../../utils/js/apiCallController';
import CountryAutocomplete from '../auth/CountryAutocomplete';
import './EditPersonalData.css'


function EditPersonalData({ client, onSuccess, onCancel }) {
    const [formData, setFormData] = useState({
        name: client.name,
        surname: client.surname,
        email: client.email,
        phone: client.phone,
        dni: client.dni,
        address: client.address,
        country_id: client.country.id
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = await updateClient(client.id, formData);
            onSuccess(updatedData);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='edit-form'>
            {error && <div className="error-message">{error}</div>}
            
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="surname">Surname</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="dni">DNI</label>
                <input
                    type="text"
                    id="dni"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* <div>
                <label htmlFor="country">Address</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country_id}
                    onChange={handleChange}
                    required
                />
            </div> */}
            <div>
                <CountryAutocomplete
                    value={formData.country_id} 
                    onChange={handleChange}
                    onFocus={() => {}} 
                    onBlur={() => {}} 
                    className="edit-clientProfile-country"
                />
            </div>

            <div className="form-buttons">
                <button type="submit">Save Changes</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default EditPersonalData;