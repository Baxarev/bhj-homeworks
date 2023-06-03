const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const cartProduct = document.createElement('div');
cartProduct.classList.add('cart__product');
const productQuantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productImage = document.querySelectorAll('.product__image');
let existence = [false, false, false, false];

function addCartProduct(pos, index) {
  function addQantityValue() {
    document.querySelector(`.cart__product[data-id="${index+1}"]`).lastChild.textContent = +document.querySelector(`.cart__product[data-id="${index+1}"]`).lastChild.textContent + +productQuantityValue[index].textContent;
  }

  function addClearProduct() {
    cartProducts.lastChild.firstChild.nextElementSibling.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      existence[pos] = false;
    })
  }

  if (existence[pos]) {
    addQantityValue();
  }
  else {
    cartProducts.append(cartProduct.cloneNode())
    cartProducts.lastChild.dataset.id = index + 1;
    cartProducts.lastChild.innerHTML = '<img class="cart__product-image"><div class="cart__product-cancle">&#10006;</div><div class="cart__product-count"></div>';
    switch (cartProducts.lastChild.dataset.id) {
      case '1':
      cartProducts.lastChild.firstChild.setAttribute('src', 'https://pokushai.kz/uploads/files/640x480_f8f13b9f33dbb71ced4a24d4a9e09c89.jpg');
      addClearProduct();
      addQantityValue();
      break;
      case '2':
      cartProducts.lastChild.firstChild.setAttribute('src', 'https://cs8.pikabu.ru/post_img/2017/09/21/6/150598626812465714.jpg');
      addClearProduct();
      addQantityValue();
      break;
      case '3':
      cartProducts.lastChild.firstChild.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Esox_lucius1.jpg');
      addClearProduct();
      addQantityValue();
      break;
      case '4':
      cartProducts.lastChild.firstChild.setAttribute('src', 'https://web-zoopark.ru/wp-content/uploads/2018/06/5-48.jpg');
      addClearProduct();
      addQantityValue();
      break;
    }
    existence[pos] = true;
  }
}

function animation(e, index) {
  const cartProductImg = productImage[index].cloneNode();
  cartProductImg.classList.add('product__image-clone');
  e.target.closest('.product').append(cartProductImg);
  let left = document.querySelector(`.cart__product[data-id="${index+1}"]`).getBoundingClientRect().left / 10;
  let top = (cartProductImg.getBoundingClientRect().top - document.querySelector(`.cart__product[data-id="${index+1}"]`).getBoundingClientRect().top) / 10;
  let count = 0;
  cartProductImg.style.left = '0px';
  cartProductImg.style.top = '0px';
  
  function start() {
    cartProductImg.style.left = `${parseInt(cartProductImg.style.left) + left}px`;
    cartProductImg.style.top = `${parseInt(cartProductImg.style.top) - top}px`;
  }

  const timer = setInterval(() => {
    start();
    count++;
    if (count === 10) {
      clearInterval(timer);
      cartProductImg.remove();
    };
  }, 30);
}

productAdd.forEach((i, index) => i.addEventListener('click', (e) => {
  if (index === 0) {
    addCartProduct(0, index)
  }
  if (index === 1) {
    addCartProduct(1, index)
  }
  if (index === 2) {
    addCartProduct(2, index)
  }
  if (index === 3) {
    addCartProduct(3, index)
  }
  animation(e, index);
  localStorage.setItem('cartProducts', `${cartProducts.innerHTML}`);
}))

productQuantityControlDec.forEach(i => i.addEventListener('click', (e) => {
  if (e.target.nextElementSibling.textContent === '0') return;
  e.target.nextElementSibling.textContent--;
}))

productQuantityControlInc.forEach(i => i.addEventListener('click', e => e.target.previousElementSibling.textContent++));

window.addEventListener('load', () => {
  cartProducts.innerHTML = localStorage.getItem('cartProducts');
  const btnCancle = document.querySelectorAll('.cart__product-cancle');
  btnCancle.forEach(i => existence[i.parentElement.dataset.id-1] = true);
  btnCancle.forEach((i) => i.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    existence[e.target.parentElement.dataset.id-1] = false;
    localStorage.setItem('cartProducts', `${cartProducts.innerHTML}`);
  }))
})