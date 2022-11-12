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
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button')

    for (let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
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
    var button = event.target 
    var shopItem = 
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
