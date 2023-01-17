(function() {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function() {
    cart.classList.toggle("show-cart");
  });
})();

(function() {
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      //   console.log(event.target);
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath =
          event.target.parentElement.parentElement.parentElement
            .previousElementSibling.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img${partPath}`;
        let itemName =
          event.target.parentElement.parentElement.parentElement
            .previousElementSibling.children[0].textContent;
        let itemPrice =
          event.target.parentElement.parentElement.parentElement.children[0]
            .textContent;

        let finalPrice = itemPrice.slice(1).trim();

        item.name = itemName;
        item.price = finalPrice;

        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

        cartItem.innerHTML = `
      <img src="${item.img}" class="img-fluid rounded-circle item-img" id="item-img" alt="" />
      <div class="item-text">
        <p id="cart-item-title" class="mb-0 cart-item-title">
          ${item.name}
        </p>
        <span>$</span>
        <span id="cart-item-price" class="cart-item-price">${item.price}</span>
      </div>
      <a href="#" id="cart-item-remove" class="cart-item-remove">
        <i class="bx bx-trash"></i>
      </a>
    </div>
   
    `;

        const cart = document.getElementById("cart");
        const total = document.getElementById("total");

        cart.insertBefore(cartItem, total);
        alert("Item added to the cart");
        showTotal();

      }
    });
  });

  function showTotal() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    const cart = document.getElementById("cart");
    items.forEach(function(item) {
      total.push(parseFloat(item.textContent));
    });
    const totalMoney = total.reduce(function(total, item) {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney;
    // console.log(finalMoney);
    document.getElementById("cart-item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
  }
})();

function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: "pk_test_12a8875d58c10847ca4e7bf615c420b01e53b0ec", //put your public key here
    email: "ibidapoayomide754@gmail.com", //put your customer's email here
    amount: document.getElementById("cart-item-total").textContent + "00", //amount the customer is supposed to pay
    // metadata: {
    //   custom_fields: [
    //     {
    //       display_name: name.value,
    //       variable_name: "mobile_number",
    //       value: number.value //customer's mobile number
    //     }
    //   ]
    // },
    callback: function(response) {
      //after the transaction have been completed
      //make post call  to the server with to verify payment
      //using transaction reference as post data
      $.post("verify.php", { reference: response.reference }, function(status) {
        if (status == "success")
          //successful transaction
          alert("Transaction was successful");
        //transaction failed
        else alert(response);
      });
    },
    onClose: function() {
      //when the user close the payment modal
      alert("Transaction cancelled");
    }
  });
  handler.openIframe(); //open the paystack's payment modal
}

