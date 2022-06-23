function placeOrder(el) {
  alert("Your order has already sumitted!")
}

function increaseQuantity(el) {
  const input = $(el).parent().find("input");
  let val = parseInt(input.val());
  if (val < 10) {
    val += 1;
    input.val(val);
    //recalculate total price
    const price = parseFloat($(el).parent().parent().find(".unitPrice").text());
    $(el).parent().parent().find(".totalPrice").text(calcTotalPrice(price, val));
  }
}

function decreaseQuantity(el) {
  const input = $(el).parent().find("input");
  let val = parseInt(input.val());
  if (val > 0) {
    val -= 1;
    input.val(val);
    //recalculate total price
    const price = parseFloat($(el).parent().parent().find(".unitPrice").text());
    $(el).parent().parent().find(".totalPrice").text(calcTotalPrice(price, val));
  }
}

function calcTotalPrice(price, qtt) {
  return price * qtt;
}