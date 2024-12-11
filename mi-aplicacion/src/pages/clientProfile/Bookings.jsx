function Bookings ({reservation}){
    const bookings = [
        {
        id:1,
        pack: {
            name: "Premium Pack",
            price: 4999,
            duration: 90
        },
        status: "required",
        application_date: "5 de diciembre de 2024",
        message: "Interesado en el pack premium",
        requested_dates: "15 de diciembre de 2024",
        source: "Google Search",
        },
        {
            id:2,
            pack: {
                name: "Premium Pack",
                price: 4999,
                duration: 90
            },
            status: "required",
            application_date: "5 de diciembre de 2024",
            message: "Interesado en el pack premium",
            requested_dates: "15 de diciembre de 2024",
            source: "Google Search",
            }
    ];

    return (
        <>
            <div>
                <h3>Here are your bookings:</h3>
                {bookings.map((booking) => (                 
                        <div key={booking.id}>
                <p>{booking.pack.name}</p>
                <p>EUR {booking.pack.price}</p>
                <p>{booking.pack.duration}</p>
                <p>{booking.status}</p>
                <p>{booking.application_date}</p>
                <p>{booking.message}</p>
                <p>{booking.requested_dates}</p>
                <p>{booking.source}</p>
                        </div>
                ))}
               
            </div>  
        </>
    );
}

export default Bookings;