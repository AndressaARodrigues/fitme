import React from 'react';
import Footer from '../components/Footer';
import FoodImage1 from '../assets/Rectangle1.png';
import FoodImage2 from '../assets/Rectangle2.png';
import FoodImage3 from '../assets/Rectangle3.png';
import ImageBanana from '../assets/banana.png';
import ImageMaca from '../assets/maca.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <p className="title">
            Premium 
            <span className="orange-text"> quality</span>
            <br/>Food for your 
            <span className="icon-container">
              <img src={ImageBanana} alt="Icone de banana" className='icon'/>
            </span>
            <span className="orange-text">healthy</span>
            <span className="icon-container">
              <img src={ImageMaca} alt='Icone de maçã' className='icon'/>
            </span>
            <span className="orange-text"> & Daily life</span>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="food-images">
          <img src={FoodImage1} alt='Food 1' className='food-image1' />
          <img src={FoodImage2} alt='Food 2' className='food-image2' />
          <img src={FoodImage3} alt='Food 3' className='food-image3' />
        </div>
      </section>

      <main>
      </main>

      <Footer />
    </>
  );
};

export default Home;
