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
    calcTotalPrice(price, "+");
    $(el).parent().parent().find(".totalPrice").text(calcItemTotalPrice(price, val));
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
    calcTotalPrice(price, "-");
    $(el).parent().parent().find(".totalPrice").text(calcItemTotalPrice(price, val));
  }
}

function calcItemTotalPrice(price, qtt) {
  return price * qtt;
}

function calcTotalPrice(price, operate) {
  let total = parseFloat($("#total").text());
  if (operate == '+') {
    total += price;
  } else {
    total -= price;
  }
  $("#total").text(total);
}