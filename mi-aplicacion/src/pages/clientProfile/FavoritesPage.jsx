import "./FavoritesPage.css";
import FavoriteButton from "../../components/button/FavoriteButton";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]); // Estado para los favoritos

    useEffect(() => {
        // Cargar favoritos desde localStorage al montar el componente
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main className="faforites-page">
                <div className="my-favorites">
                    <h1 className="my-favorites-title"> MY FAVORITES</h1>
                </div>
                <div className="favorites-container">
                    {favorites.length === 0 ? (
                        <p>No favorites yet.</p>
                    ) : (
                        favorites.map((booking) => (
                            <div key={booking.id}>
                                <h2>{booking.pack.name}</h2>
                                <FavoriteButton
                                    bookingId={booking.id}
                                    isFavorite={favorites.some(fav => fav.id === booking.id)}
                                    onFavoriteToggle={(bookingId, isFavorite) => handleFavoriteToggle(bookingId, isFavorite)}
                                />
                                <p>Duration: {booking.pack.duration} days</p>
                                <p>Price: EUR {booking.pack.price}</p>
                            </div>
                          
                        ))
                    )}
                </div>

            </main>
        </>
    );
};

export default FavoritesPage;