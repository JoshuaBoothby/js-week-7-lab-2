"use strict";

let products = [
  { id: 1, name: "Echo Dot", price: 29.99, quantity: 1 },
  { id: 2, name: "Fire TV Stick", price: 39.99, quantity: 2 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99, quantity: 1 },
  { id: 4, name: "Echo Show 5", price: 89.99, quantity: 0 },
  { id: 5, name: "Fire Tablet", price: 49.99, quantity: 3 },
  { id: 6, name: "Ring Video Doorbell", price: 99.99, quantity: 1 },
];

// Function to calculate the total invoice amount based on the quantity of each product
function fullTotal(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  return total.toFixed(2);
}
console.log(fullTotal(products));
// Added .toFixed(2) to the total to get the output to be formatted like money

// Function to render the products in the table
function renderProducts(products) {
  let tableBody = document.getElementById("table-body");
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQuantity = document.createElement("td");
    let tdTotal = document.createElement("td");

    tdId.innerText = product.id;
    tdName.innerText = product.name;
    tdPrice.innerText = product.price;
    tdQuantity.innerText = product.quantity;
    tdTotal.innerText = product.price * product.quantity;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdTotal);
    tableBody.appendChild(tr);
  }
}
renderProducts(products);
