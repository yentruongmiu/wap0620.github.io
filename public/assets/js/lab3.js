function placeOrder(el) {
  alert("Your order has already sumitted!")
}

function increaseQuantity(el) {
  const input = $(el).parent().find("input");
  const val = parseInt(input.val());
  if (val < 10) {
    val += 1;
    input.val(val);
    //recalculate total price
  }
}

function decreaseQuantity(el) {
  const input = $(el).parent().find("input");
  const val = parseInt(input.val());
  if (val > 0) {
    val -= 1;
    input.val(val);
  }
}