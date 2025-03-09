import React from 'react';

function Main() {
    return (
        <main>
            <div className="container">
                <div className="main-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p class="leadText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className="main-image">
                    <img className="restaurant-food" src="/images/restauranfood.jpg" alt="Little Lemon Restaraunt Food" />
                </div>
            </div>
        </main>
    );
}

export default Main;