const removeCartItemButtons = document.getElementsByClassName("btn-danger");

for (let i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];

  button.addEventListener("click", (e) => {
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
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
}
