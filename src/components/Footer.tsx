import './Footer.css';
import LogoImage from '../assets/Logo-white.png';
import Iconfb from '../assets/facebook icon.png';
import Iconig from '../assets/Vector.png';
import Icontt from '../assets/twitter icon.png';


const Footer = () => {
  return (
  <>
    <footer>
      <div className='footer'>
        <div className='footer-column'>
            <img src={LogoImage} alt='Logo' className='footer-logo' />
        </div>
        <div className='footer-column'>
            <ul className='footer-menu'>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Help and Support</li>
            <li>T & C</li>
            </ul>
        </div>
        <div className='footer-column'>
            <p>Contact: +91 1234567899</p>
        </div>
      </div>
      <div className='footer-social-icons'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <img src={Iconfb} alt='Icone Facebook' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src={Iconig} alt='Icone Instagram' />  
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
             <img src={Icontt} alt='Icone Twitter' />
          </a>
       </div>
     </footer>
     </>
  );
};

export default Footer;
