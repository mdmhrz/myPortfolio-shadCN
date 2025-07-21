import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Blog from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;