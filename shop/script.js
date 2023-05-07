const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

var search = document.getElementById("search");
var all = document.getElementById("all");
var mens = document.getElementById("mens");
var womens = document.getElementById("womens");
var jewellery = document.getElementById("jewellery");
var electronics = document.getElementById("electronics");
var itemsCon = document.querySelector(".items");
var range = document.getElementById("range");

var itemsArr = [];

// fetch Items from API
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {
  itemsArr = data;

  localStorage.setItem("allItmes",JSON.stringify(itemsArr));

  showContent(itemsArr);
  console.log(itemsArr[0]);
})

function showContent(arr){
  itemsCon.innerHTML = "";

  arr.forEach((element) => {
    itemsCon.innerHTML += `
    <div class="item">
    <img src="${element.image}" alt="Item" />
    <div class="info">
      <div style="margin-bottom: 10px; font-weight:600">${element.title}</div>
      <div style="font-weight:bold" class="row">
        <div class="price">$${element.price}</div>
      </div>
      <div style='margin-top:10px;' class="row">Rating: ${Math.floor(element.rating.rate)}</div>
    </div>
    <button id="addBtn" onClick='addToCart(${element.id})'>Add to Cart</button>
  </div>
    `
  })
}

search.addEventListener('input',()=>{
  filterArr = itemsArr.filter(element=>{
    if(element.title.toLowerCase().includes(search.value.trim().toLowerCase())){
      return element;
    }
  })

  // console.log(filterArr);

  if(filterArr.length==0){
    itemsCon.innerHTML=`
    <h4 style='color:red; font-size: 20px;'>No Items Found! Please Modify Your Search</h4>
    `
    return;
  }
  showContent(filterArr);
})

// Show all Content
all.addEventListener('click',()=>{
  arr =JSON.parse(localStorage.getItem('allItmes'));

  all.style.backgroundColor='black';
  all.style.color='white';
  mens.style.color='black';
  mens.style.backgroundColor='white';
  womens.style.color='black';
  womens.style.backgroundColor='white';
  jewellery.style.color='black';
  jewellery.style.backgroundColor='white';
  electronics.style.color='black';
  electronics.style.backgroundColor='white';
  showContent(arr);
})

// Men's filter
mens.addEventListener('click', () => {
  mensArr = itemsArr.filter(element => {
    if(element.category=="men's clothing"){
      return element;
    }
  })

  // Now Show Men's Content
  all.style.backgroundColor='black';
  all.style.color='white';
  mens.style.color='black';
  mens.style.backgroundColor='white';
  womens.style.color='black';
  womens.style.backgroundColor='white';
  jewellery.style.color='black';
  jewellery.style.backgroundColor='white';
  electronics.style.color='black';
  electronics.style.backgroundColor='white';
  showContent(mensArr);
})


// womens filter
womens.addEventListener('click', () => {
  womensArr = itemsArr.filter(element => {
    if(element.category=="women's clothing"){
      return element;
    }
  })

  // Now Show Men's Content
  all.style.backgroundColor='black';
  all.style.color='white';
  mens.style.color='black';
  mens.style.backgroundColor='white';
  womens.style.color='black';
  womens.style.backgroundColor='white';
  jewellery.style.color='black';
  jewellery.style.backgroundColor='white';
  electronics.style.color='black';
  electronics.style.backgroundColor='white';
  showContent(womensArr);
})

// jewellery filter
jewellery.addEventListener('click', ()=> {
  jewelleryArr = itemsArr.filter(element => {
    if(element.category=="jewelery"){
      return element;
    }
  })

  // Now Show Men's Content
  all.style.backgroundColor='black';
  all.style.color='white';
  mens.style.color='black';
  mens.style.backgroundColor='white';
  womens.style.color='black';
  womens.style.backgroundColor='white';
  jewellery.style.color='black';
  jewellery.style.backgroundColor='white';
  electronics.style.color='black';
  electronics.style.backgroundColor='white';
  showContent(jewelleryArr);
})


// electronics filter
electronics.addEventListener('click',()=>{
  electronicsArr = itemsArr.filter(element =>{
    if(element.category=="electronics"){
      return element;
    }
  })

  // Now Show Men's Content
  all.style.backgroundColor='black';
  all.style.color='white';
  mens.style.color='black';
  mens.style.backgroundColor='white';
  womens.style.color='black';
  womens.style.backgroundColor='white';
  jewellery.style.color='black';
  jewellery.style.backgroundColor='white';
  electronics.style.color='black';
  electronics.style.backgroundColor='white';
  showContent(electronicsArr);
})


// range filter
range.addEventListener('click', ()=> {
  console.log(range.value);
  
  // If range is 0 then show all itmes
  if(range.value==0){
    showContent(itemsArr);
    return;
  }

  rangeArr = itemsArr.filter(element =>{
    if(Math.floor(element.rating.rate)==range.value){
      return element;
    }
  })

  if (rangeArr.length == 0) {
    itemsCon.innerHTML=`
    <h4 style='color:red; font-size: 20px;'>No Items Found! Please Modify Your Search</h4>
    `
    return;
  }

  showContent(rangeArr);
})