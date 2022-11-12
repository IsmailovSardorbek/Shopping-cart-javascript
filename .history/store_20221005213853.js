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
    var cartItemContainer = document.getElementsByClassName("cart-items");
    
}
