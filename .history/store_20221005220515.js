if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const removeCartItemButtons = document.getElementsByClassName("btn-danger");

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];

    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");

  for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");

  for (let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;

  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;

  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  let cartRowContents = ` <div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src=${imageSrc}
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="2" />
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
        .addEventListener("click", removeCartItem);
    cartRow
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    var price = parseFloat(priceElement.innerText.replace("$", ""));

    var quantity = quantityElement.value;
    total += price * quantity;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerText = `$${total}`;
}
