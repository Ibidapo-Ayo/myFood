const toTop = document.querySelector(".back-to-top");

window.addEventListener('scroll', () =>{
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
})

var cartprice = document.querySelector("#cart-price");
var subtract = document.querySelector("#subtract");
var add = document.querySelector("#add");
var price = document.getElementById("price");


price.innerHTML = 500;
add.addEventListener("click", ()=>{
  cartprice2 = cartprice.value++;
  price.innerHTML = cartprice2*500 + 500;
})

subtract.addEventListener("click", () =>{
  if(cartprice.value == 1){
    alert("You must Purchase atleast 1 Item")
  }else{
    cartprice2 = cartprice.value--;
  }
  price.innerHTML = cartprice2*500 - 500;
})
