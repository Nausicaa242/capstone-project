import React from 'react';

const testimonialsData = [
    {
        stars: 5,
        image: "images/judith.jpg",
        name: "Sara Lopez",
        nickname: "Sara72",
        comment: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!"
    },
    {
        stars: 5,
        image: "images/amir.jpg",
        name: "Jon Do",
        nickname: "Johnny_Utah",
        comment: "We had such a great time celebrating my grandmother's birthday"
    },
    {
        stars: 5,
        image: "images/ashwin.jpg",
        name: "Sara Lopez",
        nickname: "Sara72",
        comment: "Best Feta Salad in town. Flawless every time!"
    },
    {
        stars: 5,
        image: "images/imansyah.jpg",
        name: "Sara Lopez",
        nickname: "Sara72",
        comment: "Such a chilled-out atmosphere - love it!"
    }
];

function Testimonial({ stars, image, name, nickname, comment }) {
    return (
        <div className="testimonial">
            <div className="stars">
                {Array.from({ length: stars }).map((_, index) => (
                    <img key={index} src="images/star.png" width="16px"alt="star" />
                ))}
            </div>
            <img className="image" src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="nickname">{nickname}</p>
            <p className="comment">"{comment}"</p>
        </div>
    );
}

function CustomersSay() {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            stars={testimonial.stars}
                            image={testimonial.image}
                            name={testimonial.name}
                            nickname={testimonial.nickname}
                            comment={testimonial.comment}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;