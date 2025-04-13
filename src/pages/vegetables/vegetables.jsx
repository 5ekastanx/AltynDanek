import React, { useState } from 'react';
import './vegetables.css';
import imagecard from '../../Accests/imagecard.png';
import imagecard1 from '../../Accests/imagecard1.png';
import imagecard2 from '../../Accests/imagecard2.png';
import ad1 from '../../Accests/ad1.jpg';
import ad2 from '../../Accests/ad2.jpg';
import ad3 from '../../Accests/ad3.jpg';
import ad4 from '../../Accests/ad4.jpg';
import ad5 from '../../Accests/ad5.jpg';
import ad6 from '../../Accests/ad6.jpg';
import ad7 from '../../Accests/ad7.jpg';
import vegetables2 from '../../Accests/vegetables2.jpg';
import vegetables3 from '../../Accests/vegetables3.jpg';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const items = [
  { id: 1, price: 120, title: 'Tomato', img: imagecard },
  { id: 2, price: 120, title: 'Fennel', img: imagecard1 },
  { id: 3, price: 120, title: 'Spring Onion', img: imagecard2 },
  { id: 4, price: 120, title: 'Apple', img: imagecard },
  { id: 5, price: 120, title: 'Cucumber', img: imagecard1 },
  { id: 3, price: 120, title: 'Spring Onion', img: imagecard2 },
  { id: 2, price: 120, title: 'Fennel', img: imagecard1 },
  { id: 6, price: 120, title: 'Lettuce', img: imagecard2 },
];

const images = [
  ad7,
  vegetables2,
  vegetables3,
  ad1,
  ad2,
  ad3,
  ad4,
  ad5,
  ad6,
];

const Vegetables = () => {
  const [current, setCurrent] = useState(0);
    const dispatch = useDispatch();
  
    const handleAddToCart = (item) => {
      dispatch(addItem({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: quantities[item.id] || 1,
        image: item.img
      }));
    };
  

  // Функция для получения текущих изображений для слайда
  const getCurrentImages = () => {
    const start = current * 3; // Каждому слайду показываем 3 картинки
    return images.slice(start, start + 3); // Берем 3 карточки для одного слайда
  };

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    setCurrent((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex * 3 >= images.length) return 0; // Переход к первому слайду после последнего
      return nextIndex;
    });
  };

  // Функция для переключения на предыдущий слайд
  const prevSlide = () => {
    setCurrent((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) return Math.floor(images.length / 3) - 1; // Переход к последнему слайду
      return prevIndex;
    });
  };

  const [quantities, setQuantities] = useState({});

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
    <div>
      <div className="section_vega">
      <div className="carousel-container fade-in">
      <button className="carousel-btn prev" onClick={prevSlide}>&#60;</button>
      <div className="carousel-track">
        {getCurrentImages().map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>&#62;</button>
      {/* Дотсы для отображения активного слайда */}
      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
        {/* Карточки с товарами, отображаемые в 2 колонки */}
        <div className="container">
  <div className="card_grid2 fade-in">
    {items.map((item) => (
      <div className="card_fruit2" key={item.id}>
        <div className="card_badge2">Fresh</div>
        <div className="card_img2">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="card_content2">
          <p className="card_title2">{item.title}</p>
          <p className="card_price2">$4.99</p>
          <div className="card_controls2">
            <div className="quantity_selector2">
              <button className="quantity_btn2 minus" onClick={() => decrease(item.id)}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantities[item.id] || 1}
                onChange={(e) => handleInputChange(e, item.id)}
                className="quantity_input2"
              />
              <button className="quantity_btn2 plus" onClick={() => increase(item.id)}>
                +
              </button>
            </div>
            <select className="unit_selector2">
              <option>kg</option>
              <option>g</option>
              <option>lb</option>
            </select>
          </div>
          <button onClick={() => handleAddToCart(item)} className="add_btn2">
            <span >Add to Cart</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15Z" fill="white"/>
              <path d="M14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15Z" fill="white"/>
              <path d="M16.5 4H4.5L3.5 1H1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 7H14.5L16 4H4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Vegetables;
