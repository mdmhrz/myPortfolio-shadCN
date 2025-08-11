import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../MyJourney/MyJourney';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>


            <Contact></Contact>
        </div>
    );
};

export default Home;