// about.js
import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1>About</h1>
            <div className='img-container'> 
                <img
                    src='https://www.calendarclub.ca/cdn/shop/files/Hamsterpeace.png?v=1695842769'
                    width='200'
                    height='200'
                />
            </div>
            <p>
                Kalkulator Affine Cipher dan Caesar Cipher ini dikembangkan oleh Irawan Habib Yulianto sebagai proyek perbaikan untuk ujian tengah semester pada mata kuliah Kriptografi.
            </p>
            <Link to="/">
                <h4 className='link'>Back to Calculator</h4>
            </Link>
        </div>
    );
};

export default About;
