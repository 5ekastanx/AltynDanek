import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../../store/cartSlice';
import './basket.css';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.cart.items);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });
  
  // Calculate totals
  const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 150;
  const total = subtotal + deliveryFee;

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, change) => {
    const item = basketItems.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      } else {
        dispatch(removeItem(id));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendOrderToTelegram = async () => {
    // Проверяем заполнены ли все поля
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.address) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    try {
      // Формируем сообщение для Telegram
      const message = `НОВЫЙ ЗАКАЗ!\n\n` +
        `👤 Клиент: ${contactInfo.name}\n` +
        `📞 Телефон: ${contactInfo.phone}\n` +
        `🏠 Адрес: ${contactInfo.address}\n\n` +
        `🛒 Товары:\n${basketItems.map(item => 
          `- ${item.name} (${item.quantity} кг) - ${item.price * item.quantity} ₽`
        ).join('\n')}\n\n` +
        `💰 Сумма товаров: ${subtotal} ₽\n` +
        `🚚 Доставка: ${deliveryFee} ₽\n` +
        `💵 Итого: ${total} ₽`;
      
      // ID вашего Telegram бота и чата
      const botToken = '7261885668:AAHPeGrXqpUUDx6RSYwVV_1C1wVunEJnyJs';
      const chatId = '6064303468';
      
      // Отправляем сообщение в Telegram
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      if (response.ok) {
        alert('Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
        dispatch(clearCart()); // Очищаем корзину после успешной отправки
        setShowContactForm(false); // Закрываем форму
        setContactInfo({ name: '', phone: '', address: '' }); // Очищаем поля
      } else {
        alert('Произошла ошибка при отправке заказа. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert('Произошла ошибка при отправке заказа. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleCheckoutClick = () => {
    if (basketItems.length === 0) {
      alert('Ваша корзина пуста!');
      return;
    }
    setShowContactForm(true);
  };

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
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="item-price">{item.price} ₽/кг</div>
                    <div className="item-quantity">
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="item-total">
                    <div>{item.price * item.quantity} ₽</div>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      ×
                    </button>
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
              <button 
                onClick={handleCheckoutClick} 
                className="checkout-btn"
              >
                Оформить заказ
              </button>
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

        {/* Модальное окно с формой контактных данных */}
        {showContactForm && (
          <div className="contact-form-modal">
            <div className="contact-form-content">
              <h3>Контактные данные</h3>
              <p>Пожалуйста, заполните форму для оформления заказа</p>
              
              <div className="form-group">
                <label>Ваше имя:</label>
                <input
                  type="text"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleInputChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Номер телефона:</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleInputChange}
                  placeholder="+996 (770) 23-45-67"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Адрес доставки:</label>
                <textarea
                  name="address"
                  value={contactInfo.address}
                  onChange={handleInputChange}
                  placeholder="Город, улица, дом, квартира"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button 
                  onClick={sendOrderToTelegram}
                  className="submit-order-btn"
                >
                  Подтвердить заказ
                </button>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="cancel-order-btn"
                >
                  Отменить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
