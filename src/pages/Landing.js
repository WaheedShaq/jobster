import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster-logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span>app
          </h1>
          <p>
            I'm baby banjo keffiyeh lo-fi, snackwave fam vexillologist quinoa
            pinterest. 90's gatekeep leggings migas kogi. Kombucha 8-bit
            scenester, typewriter tote bag shoreditch slow-carb twee
            single-origin coffee trust fund.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
