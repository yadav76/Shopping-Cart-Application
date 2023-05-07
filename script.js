// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

var shop = document.getElementById("shop");
var cart = document.getElementById("cart");
var profile = document.getElementById("profile");
var home = document.getElementById("home");

if (!localStorage.getItem("currUser")) {
    shop.href="javascript: void(0)";
    cart.href="javascript: void(0)";
    profile.href="javascript: void(0)";
}

var login = document.getElementById("login");
var signup = document.getElementById("signup");

login.addEventListener('click', () => {
    console.log("login");
    location.href = './login/index.html';
})

signup.addEventListener('click', () => {
    location.href = './signup/index.html';
})