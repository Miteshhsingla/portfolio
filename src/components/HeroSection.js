import React from 'react';
import '../index.css';

import img from '../assets/bitmoji.svg';
import img2 from '../assets/HeroImg.svg';
import bottomImg from '../assets/bottomDesign.svg';
import bottomArrow from '../assets/bottomArrow.svg';
import github from '../assets/socialMediaIcons/ri_github-fill.svg';
import instagram from '../assets/socialMediaIcons/ri_instagram-line.svg';
import linkedin from '../assets/socialMediaIcons/ri_linkedin-fill.svg';
import twitter from '../assets/socialMediaIcons/ri_twitter-fill.svg';
import Scrollimg from '../assets/download.svg'


const HeroSection = ({ scrollToAbout }) => {


    return (
        <div className="hero-section">
            <div className="icon-image">
                <img src={img} alt="icon" />
            </div>

            <div className="content">
                <p className="name">LAKSHAY ARORA</p>
                <p className='heading' >CRAFTING <span style={{ color: '#BB9CFF' }}>WEB WONDERS</span> AS A FULL STACK DEVELOPER</p>
            </div>
            <div className="hero_img">
                <img src={img2} alt="MainImg" />
            </div>
            <div className='div-design'>
                <img src={bottomImg} alt="design" />
            </div>

            <div>
                <img src={bottomArrow} alt="arrow" className="bottom-arrow" onClick={scrollToAbout} />
            </div>
            <SocialMedia />

        </div>
    );
};

const SocialMedia = () => {
    return (
        <div className="social-media">
            <ul>
                <li><a href="https://github.com/Lakshya6554" target="_blank" rel='noreferrer'><img src={github} alt="icon" className="social-image" /></a></li>
                <li><a href="https://www.instagram.com/lakshay._.03/" target="_blank" rel='noreferrer'><img src={instagram} alt="icon" className="social-image" /></a></li>
                <li><a href="https://www.linkedin.com/in/lakshay-arora-360b50228/" target="_blank" rel='noreferrer'><img src={linkedin} href="https://www.linkedin.com/in/mitesh-singla-850989229/" alt="icon" className="social-image" /></a></li>
                <li><a href="https://twitter.com/MiteshhSingla" target="_blank" rel='noreferrer'><img src={twitter} alt="icon" className="social-image" /></a></li>
            </ul>
        </div>
    );
};


export default HeroSection;