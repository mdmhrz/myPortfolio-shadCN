import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../MyJourney/MyJourney';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Blog from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;