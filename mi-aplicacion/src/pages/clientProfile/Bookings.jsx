import React, { useState, useEffect } from 'react';
import { getMyBookings } from '../../utils/js/apiCallController'


function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadBookings() {
            try {
                const response = await getMyBookings();
                setBookings(response?.data || []);
                setLoading(false);
            } catch (err) {
                setError('Error loading bookings');
                setLoading(false);
            }
        }

        loadBookings();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!bookings.length) return <div>No bookings yet.</div>;

    return (
        <div>
            <h3>Here are your bookings:</h3>
            {bookings.map((booking) => (
                <div key={booking.id}>
                    <p>Experience: {booking.pack.name}</p>
                    <p>EUR {booking.pack.price}</p>
                    <p>Duration: {booking.pack.duration}</p>
                    <p>Status: {booking.status}</p>
                    <p>Application date: {booking.application_date}</p>
                    <p>Your message: {booking.message}</p>
                    <p>Requested dates: {booking.requested_dates}</p>
                </div>
            ))}
        </div>
    );
}

export default Bookings;