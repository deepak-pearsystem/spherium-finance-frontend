import React from 'react';
import Banner from './Banner';
import Inthenews from './Inthenews';
import Partners from './Partners';
import Investors from './Investors';
import Supportedwallets from './Supportedwallets';
import Oneplatform from './Oneplatform';
import Whatspherium from './Whatspherium';
const Home = () => {
    return (
        <section className="home-wrapper">
            <Banner/> 
            <Whatspherium/>
            <Oneplatform/>
            <Supportedwallets/>
            <Investors/>    
            <Partners/>
            <Inthenews/>
        </section>
    );
};

export default Home;