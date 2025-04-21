import React, { useState, useRef } from 'react';
import home1 from '../../Accests/home1.jpg';
import home2 from '../../Accests/home2.jpg';
import home3 from '../../Accests/home3.jpg';
import home4 from '../../Accests/home4.jpeg';
import home5 from '../../Accests/home5.png';
import header_shop from '../../Accests/headershop.png';
import imagecard from '../../Accests/imagecard.png';
import fruit3 from '../../Accests/fruit3.png';
import imagecard1 from '../../Accests/imagecard1.png';
import imagecard2 from '../../Accests/imagecard2.png';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import './home.css';

const allSlides = [
  [
    { id: 1, price: 1.29, title: 'Fennel', img: fruit3 },
    { id: 2, price: 2.49, title: 'Dry Apricots', img: home3 },
    { id: 3, price: 3.29, title: 'Dry Apricots', img: home5 },
    { id: 4, price: 1.99, title: 'Tomato', img: imagecard1 },
    { id: 5, price: 4.39, title: 'Fennel', img: imagecard },
    { id: 6, price: 2.20, title: 'Spring Onion', img: imagecard2 },
  ],
  [
    { id: 7, price: 120, title: 'Apple', img: imagecard },
    { id: 8, price: 120, title: 'Cucumber', img: imagecard2 },
    { id: 9, price: 120, title: 'Lettuce', img: imagecard1 },
    { id: 10, price: 120, title: 'Apple', img: imagecard },
    { id: 11, price: 120, title: 'Cucumber', img: imagecard2 },
    { id: 12, price: 120, title: 'Lettuce', img: imagecard1 },
  ],
  [
    { id: 13, price: 120, title: 'Orange', img: imagecard1 },
    { id: 14, price: 120, title: 'Carrot', img: imagecard2 },
    { id: 15, price: 120, title: 'Pepper', img: imagecard },
    { id: 16, price: 120, title: 'Orange', img: imagecard1 },
    { id: 17, price: 120, title: 'Carrot', img: imagecard2 },
    { id: 18, price: 120, title: 'Pepper', img: imagecard },
  ]
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const cardsRef = useRef(null);


  const handleAddToCart = (item) => {
    dispatch(addItem({
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantities[item.id] || 1,
      image: item.img
    }));
  };

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


  const handleClick = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  return (
    <>
<div className='home_header'>
  <div className="container">
    <div className="header_content">
      {/* Левая часть с текстом и элементами управления */}
      <div className="header_text">
        <h1 className="title">
          <span className="title_part">Свежие</span>
          <span className="title_part">Фрукты</span>
          <span className="title_part">Овощи</span>
          <span className="title_part highlight">Сухофрукты</span>
        </h1>
        
        <p className="subtitle">Премиум качество продуктов прямо от производителей</p>
        
        <div className="features">
          <div className="feature">
            <div className="feature_icon">✓</div>
            <span>Натуральные продукты без химии</span>
          </div>
          <div className="feature">
            <div className="feature_icon">✓</div>
            <span>Прямые поставки из садов</span>
          </div>
          <div className="feature">
            <div className="feature_icon">✓</div>
            <span>Экологичная упаковка</span>
          </div>
        </div>
        
        <div className="cta_buttons">
          <button className="primary_btn" onClick={handleClick}>
            <span>Выбрать продукты</span>
          </button>
          <button className="secondary_btn">
            <span>Узнать о скидках</span>
          </button>
        </div>
      </div>
      
      {/* Правая часть с изображениями */}
      <div className="header_images">
        <div className="main_image">
          <img 
            src={header_shop} 
            alt="Фрукты, овощи и сухофрукты" 
            className="fade-in"
          />
        </div>
        <div className="image_badge">
          <span>100% натурально</span>
        </div>
        <div className="products_preview">
          <div className="preview_item">
            <img src={home1} alt="Фрукты" />
          </div>
          <div className="preview_item">
            <img src={home2} alt="Овощи" />
          </div>
          <div className="preview_item">
            <img src={home4} alt="Сухофрукты" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="section_home" ref={cardsRef}>
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
                  <p className="card_price">${item.price.toFixed(2)}</p>
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
                  <button className="add_btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                  
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
