// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  console.log(price.innerHTML);
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = Number(price.innerHTML) * Number(quantity.value);
}

function calculateAll() {
  // ITERATION 2

  const products = document.getElementsByClassName("product");
  const productsArray = [...products];
  productsArray.forEach((element) => {
    updateSubtotal(element);
  });
}

// ITERATION 3
function calculateAll() {
  const products = document.getElementsByClassName("product");
  const productsArray = [...products];
  let totalPrice = 0;

  productsArray.forEach((element) => {
    updateSubtotal(element);
    const subtotal = element.querySelector(".subtotal span");
    totalPrice += Number(subtotal.innerHTML);
  });

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = totalPrice;
}

// Can i reuse

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
