import React from 'react';
import { Link } from 'react-router-dom';
import './basket.css';

const Basket = () => {
  // Пример данных о товарах в корзине
  const basketItems = [
    { id: 1, name: 'Свежие помидоры', price: 249, quantity: 2, image: 'tomato.png' },
    { id: 2, name: 'Огурцы', price: 189, quantity: 1, image: 'cucumber.png' },
    { id: 3, name: 'Яблоки', price: 199, quantity: 3, image: 'apple.png' },
  ];

  // Расчет общей суммы
  const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 150;
  const total = subtotal + deliveryFee;

  return (
    <div className="basket-page">
      <div className="containerb">
        <h1 className="basket-title">Ваша корзина</h1>
        
        {basketItems.length > 0 ? (
          <div className="basket-content">
            <div className="basket-items">
              {basketItems.map(item => (
                <div key={item.id} className="basket-item">
                  <div className="item-image">
                    <img src={`/images/${item.image}`} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="item-price">{item.price} ₽/кг</div>
                    <div className="item-quantity">
                      <button className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn">+</button>
                    </div>
                  </div>
                  <div className="item-total">
                    <div>{item.price * item.quantity} ₽</div>
                    <button className="remove-btn">×</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="basket-summary">
              <h2>Итого</h2>
              <div className="summary-row">
                <span>Товары ({basketItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                <span>{subtotal} ₽</span>
              </div>
              <div className="summary-row">
                <span>Доставка</span>
                <span>{deliveryFee} ₽</span>
              </div>
              <div className="summary-total">
                <span>Общая сумма</span>
                <span>{total} ₽</span>
              </div>
              <Link to="/checkout" className="checkout-btn">Оформить заказ</Link>
              <Link to="/" className="continue-shopping">Продолжить покупки</Link>
            </div>
          </div>
        ) : (
          <div className="empty-basket">
            <div className="empty-icon">🛒</div>
            <h2>Ваша корзина пуста</h2>
            <p>Добавьте товары, чтобы сделать заказ</p>
            <Link to="/" className="shopping-btn">Вернуться к покупкам</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;