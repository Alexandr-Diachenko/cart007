

    let cart = {
      'ssrr01': {
        "name": "Літак",
        "count": 0,
        "price": 50
      },
      'pfgr02': {
        "name": "М'яч",
        "count": 0,
        "price": 100
      },
    };

    document.onclick = event => {
      if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
      }

      if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
      }
    }

    // Збільшення кількості товара
    const plusFunction = id => {
      cart[id]['count']++;
      renderCart();
    }

    // Зменшення кількості товара
    const minusFunction = id => {
      if (cart[id]['count'] - 1 === 0) {
        deleteFunction(id);
        return true;
      }
      cart[id]['count']--;
      renderCart();
    }

    // Видалення товару
    const deleteFunction = id => {
      delete cart[id];
      renderCart();
    }

    // Функція, яка рахує загальну вартість кошика
    const calculateCartTotal = cartItems => {
      let total = 0;

      for (const item of Object.values(cartItems)) {
        total += item.price * item.count;
      }

      return total;
    };



// Функція, яка виводить(малює наново кошик) і виводить загальну вартість
const renderCart = () => {
  const cartInfo = document.querySelector('.cart');
  cartInfo.innerHTML = ''; // Очищуем вміст  div перед оновленням

  for (const item of Object.values(cart)) {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - Кількість: ${item.count} - Вартість: $${item.price}`;
    cartInfo.appendChild(itemDiv);
  }

  const total = calculateCartTotal(cart);
  const totalDiv = document.createElement('div');
  totalDiv.textContent = `Загальна вартість: $${total}`;
  cartInfo.appendChild(totalDiv);
}

renderCart();




