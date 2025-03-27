import React from 'react';
import CalltoAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function HomePage() {
    return (
        <>
            <CalltoAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
}

export default HomePage;