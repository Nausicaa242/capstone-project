import React from 'react';

function Chicago() {
    return (
        <section className="history">
            <div className="container">
                <div className="history-text">
                    <h2>Little Lemon</h2>
                    <h3 className="subtitle">Chicago</h3>
                    <p className="lead">Little Lemon was founded by two brothers, Mario and Adrian, who share a passion for creating exceptional dining experiences. Growing up in a family that cherished cooking, they learned the art of blending fresh, locally-sourced ingredients with traditional recipes passed down through generations. Their dream was to bring a taste of their heritage to the heart of Chicago, where they could share their love for food with the community. Today, Little Lemon stands as a testament to their dedication, offering a warm, welcoming atmosphere and dishes crafted with care and creativity.</p>
                </div>
                <div className="history-images">
                    <img className="history-image-1" src="/images/mario-and-adrian-a.jpg" alt="Little Lemon Restaraunt Food" />
                    <img className="history-image-2" src="/images/restaurant.jpg" alt="Little Lemon Restaraunt Food" />
                </div>
            </div>
        </section>
    );
}

export default Chicago;