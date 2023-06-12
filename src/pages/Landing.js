import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster-logo' className='logo'></img>
      </nav>
      <div className='container page'>
        <div className='info'></div>
        <h1>
          Job <span>Tracking</span> app
        </h1>
        <p>
          Man bun you probably haven't heard of them franzen gorpcore grailed
          celiac intelligentsia. Slow-carb edison bulb gluten-free, cloud bread
          tattooed ethical pug tofu biodiesel hexagon.
        </p>
        <button className='btn btn-hero'>Login/Register</button>

        <img src={main} alt='job-hunt' className='img main-img'></img>
      </div>
    </main>
  );
};

export default Landing;
