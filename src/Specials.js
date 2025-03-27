import React from 'react';
import { Link } from "react-router-dom";

const specialsData = [
    {
        image: "/images/greek-salad.jpg",
        specialName: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        image: "/images/bruchetta.jpg",
        specialName: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        image: "/images/lemon-dessert.jpg",
        specialName: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

function Special({ image, specialName, price, description }) {
    return (
        <div className="special">
            <img className="special-image" src={image} alt={specialName} />
            <div className="special-details">
                <h3>{specialName}</h3>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <p className="delivery">Order a delivery<span><img src="/images/scooter.png" alt="Delivery" /></span></p>
            </div>
        </div>
    );
}

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="specials-header">
                    <h2>Specials</h2>
                    <Link className="button" to="/">Online Menu</Link>
                </div>
                <div className="specials-grid">
                    {specialsData.map((special, index) => (
                        <Special
                            key={index}
                            image={special.image}
                            specialName={special.specialName}
                            price={special.price}
                            description={special.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specials;