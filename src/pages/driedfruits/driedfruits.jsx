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
      price: '450 '
    },
    {
      id: 2,
      image: apricots1,
      name: 'Органические сушеные абрикосы',
      description: 'Экологически чистые абрикосы, высушенные по традиционной технологии.',
      benefits: 'Не содержат химических добавок. Подходят для детского питания.',
      price: '600 '
    },
    {
      id: 3,
      image: apricots4,
      name: 'Турецкие сушеные абрикосы',
      description: 'Крупные мясистые сушеные абрикосы из Турции с естественной сладостью.',
      benefits: 'Источник клетчатки и антиоксидантов. Помогают при анемии.',
      price: '480 '
    },
    {
      id: 4,
      image: apricots3,
      name: 'Армянские курага',
      description: 'Курага высшего сорта из солнечной Армении, без добавления сахара и консервантов.',
      benefits: 'Содержит витамины A, C, E. Полезна для сердца и зрения.',
      price: '520 '
    },
    {
      id: 3,
      image: apricots4,
      name: 'Турецкие сушеные абрикосы',
      description: 'Крупные мясистые сушеные абрикосы из Турции с естественной сладостью.',
      benefits: 'Источник клетчатки и антиоксидантов. Помогают при анемии.',
      price: '480 '
    },
  ];

    const [quantities, setQuantities] = useState({});
      const dispatch = useDispatch();
    
      const handleAddToCart = (fruit) => {
        dispatch(addItem({
          id: fruit.id,
          name: fruit.name,
          price: fruit.price,
          quantity: quantities[fruit.id] || 1,
          image: fruit.image
        }));
      };

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
                <div className="product-price">{fruit.price}руб/кг</div>
                <button onClick={() => handleAddToCart(fruit)} className="add-to-cart">В корзину</button>
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