document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('order-form');
    const errorContainer = document.getElementById('form-errors');
    const formOutput = document.getElementById('form-output');
    
    // Обработчик формы при отправке
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение формы
      
      // Очищаем сообщения об ошибках
      errorContainer.innerHTML = '';
      
      let errors = [];
  
      // Валидация имени
      const firstName = document.getElementById('first-name').value.trim();
      if (!firstName || firstName.length < 2) {
        errors.push('Имя должно содержать минимум 2 символа.');
      }
  
      // Валидация фамилии
      const lastName = document.getElementById('last-name').value.trim();
      if (!lastName || lastName.length < 2) {
        errors.push('Фамилия должна содержать минимум 2 символа.');
      }
  
      // Валидация email
      const email = document.getElementById('email').value.trim();
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailPattern.test(email)) {
        errors.push('Введите корректный адрес электронной почты.');
      }
  
      // Валидация выбора продукта или услуги
      const productService = document.getElementById('product-service').value;
      if (!productService) {
        errors.push('Выберите продукт или услугу.');
      }
  
      // Валидация даты заказа
      const orderDate = document.getElementById('order-date').value;
      if (!orderDate) {
        errors.push('Укажите дату заказа.');
      }
  
      // Валидация сообщения
      const message = document.getElementById('message').value.trim();
      if (!message || message.length < 10) {
        errors.push('Сообщение должно содержать минимум 10 символов.');
      }
  
      // Если есть ошибки, показываем их
      if (errors.length > 0) {
        errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
      } else {
        // Если нет ошибок, выводим данные на страницу
        alert(`Данные заказа:\n\nИмя: ${firstName}\nФамилия: ${lastName}\nEmail: ${email}\nПродукт/Услуга: ${productService}\nДата заказа: ${orderDate}\nСообщение: ${message}`);
  
        // Отображаем данные в блоке под формой
        document.getElementById('output-first-name').textContent = firstName;
        document.getElementById('output-last-name').textContent = lastName;
        document.getElementById('output-email').textContent = email;
        document.getElementById('output-product-service').textContent = productService;
        document.getElementById('output-order-date').textContent = orderDate;
        document.getElementById('output-message').textContent = message;
  
        formOutput.style.display = 'block'; // Показываем блок с данными
  
        // Сбросить форму
        form.reset();
      }
    });

    // Пример изменения стилей с помощью JavaScript: изменение цвета фона блока услуг при наведении
    const servicesBlocks = document.querySelectorAll('.service-block');
    servicesBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = '#f0f8ff'; // Изменяем цвет фона при наведении
        });

        block.addEventListener('mouseleave', () => {
            block.style.backgroundColor = ''; // Восстанавливаем оригинальный цвет фона
        });
    });

    // Пример изменения стилей: скрытие блока с результатами формы при клике на кнопку
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        formOutput.style.display = 'none'; // Скрываем блок с данными
    });



    // Добавляем обработчик клика по кнопке
    btn.addEventListener('click', function() {
        // Включаем анимацию вращения на 3 секунды
        btn.classList.add('loading');

        // Через 3 секунды удаляем класс и восстанавливаем кнопку
        setTimeout(() => {
            btn.classList.remove('loading');
        }, 3000); // 3000 миллисекунд = 3 секунды
    });
});
