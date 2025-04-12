import React, { useState } from 'react';
import header_shop from '../../Accests/headershop.png';
import imagecard from '../../Accests/imagecard.png';
import imagecard1 from '../../Accests/imagecard1.png';
import imagecard2 from '../../Accests/imagecard2.png';
import './home.css';

const allSlides = [
  [
    { id: 1, title: 'Tomato', img: imagecard1 },
    { id: 2, title: 'Fennel', img: imagecard },
    { id: 3, title: 'Spring Onion', img: imagecard2 },
    { id: 4, title: 'Tomato', img: imagecard1 },
    { id: 5, title: 'Fennel', img: imagecard },
    { id: 6, title: 'Spring Onion', img: imagecard2 },
  ],
  [
    { id: 7, title: 'Apple', img: imagecard },
    { id: 8, title: 'Cucumber', img: imagecard2 },
    { id: 9, title: 'Lettuce', img: imagecard1 },
    { id: 10, title: 'Apple', img: imagecard },
    { id: 11, title: 'Cucumber', img: imagecard2 },
    { id: 12, title: 'Lettuce', img: imagecard1 },
  ],
  [
    { id: 13, title: 'Orange', img: imagecard1 },
    { id: 14, title: 'Carrot', img: imagecard2 },
    { id: 15, title: 'Pepper', img: imagecard },
    { id: 16, title: 'Orange', img: imagecard1 },
    { id: 17, title: 'Carrot', img: imagecard2 },
    { id: 18, title: 'Pepper', img: imagecard },
  ]
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantities, setQuantities] = useState({});

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleInputChange = (e, id) => {
    const value = parseInt(e.target.value);
    setQuantities((prev) => ({
      ...prev,
      [id]: isNaN(value) || value <= 0 ? 1 : value,
    }));
  };

  return (
    <>
      <div className='home_header'>
        <div className="container">
          <div className="header_shop fade-in">
            <div className="header_left">
              <img src={header_shop} width={745} height={525} alt="header_shop" />
            </div>
            <div className="header_right">
              <p>fresh-foryou: your own-shop online</p>
              <p>for purchasing the freshest and highest</p>
              <p>quality fruits and vegetables!</p>
              <button className='header_btn'><span>See More</span></button>
            </div>
          </div>
        </div>
      </div>

      <div className="section_home">
        <div className="container">
          <div className="slider_wrapper">
            <button className="nav_btn left" onClick={handlePrev}>‹</button>

            <div className="card_grid">
              {allSlides[currentSlide].map((item) => (
                <div className="card" key={item.id}>
                  <div className="card_img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <p className="card_title">{item.title}</p>
                  <div className="card_controls">
                    <div className="input_with_buttons">
                      <button className="sum_btn minus" onClick={() => decrease(item.id)}>-</button>
                      <input
                        type="number"
                        min="1"
                        value={quantities[item.id] || 1}
                        onChange={(e) => handleInputChange(e, item.id)}
                      />
                      <button className="sum_btn plus" onClick={() => increase(item.id)}>+</button>
                    </div>
                    <select>
                      <option>kg</option>
                      <option>g</option>
                    </select>
                  </div>
                  <button className="add_btn">Add to Banner</button>
                </div>
              ))}
            </div>

            <button className="nav_btn right" onClick={handleNext}>›</button>
          </div>

          <div className="dots">
            {allSlides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
