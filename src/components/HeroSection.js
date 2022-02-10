import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSections() {
    return (
        <div className='hero-container'>
            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>MOONRISE</h1>
            <p>Moonrise is a deflationary, frictionless yield and liquidity generation protocol. </p> 
            <div className="hero-btns">
                <a href="https://poocoin.app/tokens/0x2dbd86a424a815ad2a08a2d8dae07007fed6dc91"
                target="_blank"
                className='btn btn--outline btn--large'
                >Live Chart</a>
                 {/* className='btns' 
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                    LIVE CHART
                </Button> */}
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    BUY <i className='far fa-buy' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSections;
