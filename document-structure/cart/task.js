const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');


const cartProduct = document.createElement('div');
cartProduct.classList.add('cart__product');
const cartProductImg = document.createElement('img');
const cartProductCount = document.createElement('div');

let existence1 = existence2 = existence3 = existence4 = false;

function addCartProduct(num, index) {
    cartProducts.append(cartProduct.cloneNode())
    cartProducts.lastChild.dataset.id = ++index;
    existence1 = true;
}

productAdd.forEach((i, index) => i.addEventListener('click', (e) => {
  if (index === 0) {
    if (existence1) {
      
    }
    else {
      addCartProduct(1, index)
    }
  }

  if (index === 1) {
    if (existence2) {
      
    }
    else {
      cartProducts.append(cartProduct.cloneNode())
      cartProducts.lastChild.dataset.id = ++index;
      existence2 = true;
    }
  }
}))
