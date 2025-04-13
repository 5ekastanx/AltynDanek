import React from 'react'
import './footer.css'
import altyn from '../../Accests/altyn.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section logo_section">
          <div className="logo_wrapper">
            <img src={altyn} alt="AltynDanek Logo" className="footer_logo" />
            <h2 className="logo_title">AltynDanek</h2>
          </div>
          <p className="logo_description">Свежие фрукты и овощи высшего качества для вашего стола</p>
        </div>

        <div className="footer_section links_section">
          <h3 className="section_title">Навигация</h3>
          <ul className="footer_links">
            <li><a href="/" className="footer_link">Главная</a></li>
            <li><a href="/fruits" className="footer_link">Фрукты</a></li>
            <li><a href="/vegetables" className="footer_link">Овощи</a></li>
            <li><a className="footer_link">Контакты</a></li>
          </ul>
        </div>

        <div className="footer_section contact_section">
          <h3 className="section_title">Контакты</h3>
          <div className="contact_item">
            <FaPhoneAlt className="contact_icon" />
            <a href="tel:+996990867606" className="contact_link">+996 (990) 86-76-06</a>
          </div>
          <div className="contact_item">
            <FaEnvelope className="contact_icon" />
            <a href="mailto:5ekastannasirov@gmail.com" className="contact_link">altyndanek@danek.com</a>
          </div>
          
          <div className="social_links">
            <a href="https://www.instagram.com/5ekastan/" className="social_link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/mr.muralimjanov/" className="social_link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.instagram.com/ghyrution/" className="social_link" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer_bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} AltynDanek. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
