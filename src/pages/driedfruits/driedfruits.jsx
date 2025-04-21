import React, { useState } from 'react';
import './driedfruits.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import apricots from '../../Accests/apricots.png';
import apricots1 from '../../Accests/apricots1.png';
import apricots2 from '../../Accests/apricots2.png';
import apricots3 from '../../Accests/apricots3.png';
import apricots4 from '../../Accests/apricots4.png';
import home3 from '../../Accests/home3.jpg';

const DryFruits = () => {
  const driedFruits = [
    {
      id: 1,
      image: apricots2,
      name: 'Узбекские сушеные абрикосы',
      description: 'Натуральные сушеные абрикосы из Узбекистана, богатые витаминами и минералами.',
      benefits: 'Богаты калием, железом и бета-каротином. Улучшают пищеварение и укрепляют иммунитет.',
      price: 499
    },
    {
      id: 2,
      image: apricots1,
      name: 'Органические сушеные абрикосы',
      description: 'Экологически чистые абрикосы, высушенные по традиционной технологии.',
      benefits: 'Не содержат химических добавок. Подходят для детского питания.',
      price: 529
    },
    {
      id: 3,
      image: apricots4,
      name: 'Турецкие сушеные абрикосы',
      description: 'Крупные мясистые сушеные абрикосы из Турции с естественной сладостью.',
      benefits: 'Источник клетчатки и антиоксидантов. Помогают при анемии.',
      price: 359
    },
    {
      id: 4,
      image: apricots3,
      name: 'Армянские курага',
      description: 'Курага высшего сорта из солнечной Армении, без добавления сахара и консервантов.',
      benefits: 'Содержит витамины A, C, E. Полезна для сердца и зрения.',
      price: 329
    },
    {
      id: 5,
      image: apricots4,
      name: 'Турецкие сушеные абрикосы',
      description: 'Крупные мясистые сушеные абрикосы из Турции с естественной сладостью.',
      benefits: 'Источник клетчатки и антиоксидантов. Помогают при анемии.',
      price: 299
    },
  ];
  const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();

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

  const handleUnitChange = (id, unit) => {
    setUnits(prev => ({
      ...prev,
      [id]: unit
    }));
  };

  const handleAddToCart = (fruit) => {
    const quantityInKg = units[fruit.id] === 'кг' ? quantities[fruit.id] : quantities[fruit.id] / 1000;
    dispatch(addItem({
      id: fruit.id,
      name: fruit.name,
      price: fruit.price,
      quantity: quantityInKg,
      image: fruit.image
    }));
  };


  const [units, setUnits] = useState(driedFruits.reduce((acc, fruit) => {
    acc[fruit.id] = 'кг';
    return acc;
  }, {}));

  return (
    <div className="dry-fruits-page">
      <header className="dry-fruits-header">
        <h1>Сухофрукты</h1>
        <p>Натуральная сладость и польза в каждом кусочке</p>
      </header>
      
      <section className="main-product">
        <div className="main-product-content">
          <h2>Сушеные абрикосы</h2>
          <p className="main-description">
            Сушеные абрикосы - это концентрат полезных веществ и естественной сладости. 
            Они сохраняют до 90% витаминов свежих плодов и являются идеальным перекусом 
            для тех, кто заботится о своем здоровье.
          </p>
          <div className="benefits">
            <h3>Польза сушеных абрикосов:</h3>
            <ul>
              <li>Укрепляют сердечно-сосудистую систему</li>
              <li>Нормализуют работу кишечника</li>
              <li>Повышают уровень гемоглобина</li>
              <li>Улучшают состояние кожи и зрения</li>
              <li>Дают энергию и повышают работоспособность</li>
            </ul>
          </div>
        </div>
        <div className="main-product-image">
          <img src={apricots} alt="Сушеные абрикосы" />
        </div>
      </section>

      <section className="products-grid">
        <h2>Наши сухофрукты</h2>
        <div className="products-container">
          {driedFruits.map((fruit) => (
            <div key={fruit.id} className="product-card">
              <div className="product-image">
                <img src={fruit.image} alt={fruit.name} />
              </div>
              <div className="product-info">
                <h3>{fruit.name}</h3>
                <p>{fruit.description}</p>
                <div className="product-benefits">
                  <strong>Польза:</strong> {fruit.benefits}
                </div>
                <div className="product-price">{fruit.price} сом/{units[fruit.id]}</div>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => decrease(fruit.id, quantities[fruit.id] - 0.1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                        value={quantities[fruit.id] || 1}
                    onChange={(e) => handleInputChange(fruit.id, parseFloat(e.target.value))}
                    className="quantity-input"
                  />
                  <button 
                    onClick={() => increase(fruit.id, quantities[fruit.id] + 0.1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                  
                  <select
                    value={units[fruit.id]}
                    onChange={(e) => handleUnitChange(fruit.id, e.target.value)}
                    className="unit-select"
                  >
                    <option value="кг">кг</option>
                    <option value="г">г</option>
                  </select>
                </div>
                
                <button 
                  onClick={() => handleAddToCart(fruit)} 
                  className="add-to-cart"
                >
                  В корзину
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="kyrgyz-dried-fruits">
        <div className="container">
          <div className="kyrgyz-content">
            <div className="kyrgyz-text">
              <h2>Кыргызстандын кургатылган жемиштери</h2>
              <div className="kyrgyz-features">
                <div className="feature-item">
                  <div className="feature-icon">🌞</div>
                  <p>Табигый күн аркылуу кургатылган, химиясыз</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💪</div>
                  <p>Витаминге бай, косточкасы да пайдалуу</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏪</div>
                  <p>Ар бир дүкөндөн таба аласыз</p>
                </div>
              </div>
              <p className="kyrgyz-description">
                Кыргызстандын кургатылган өрүк, кайнатылган косточкасы менен дагы пайдалуу. 
                Косточкасын да жесеңиз болот, анда В17 витамини бар. Бул элдик дарылоо ыкмасы.
              </p>
            </div>
            <div className="kyrgyz-image">
              <img 
                src={home3}
                alt="Кыргызстандын кургатылган жемиштери" 
              />
              <div className="image-label">
                <span>Улуттук тамак-аш</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DryFruits;