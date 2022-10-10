// Example of a none chaind array method.
const productsPracticeChain = [
  // Here we create an object and each object has a name and a price
  { name: "dress", price: 600 },
  { name: "cream", price: 60 },
  { name: "book", price: 200 },
  { name: "bottle", price: 50 },
  { name: "bedsheet", price: 350 },
];

// Filters the elements with price above 100
const filtered = productsPracticeChain.filter((product) => product.price > 100);

const saleProducts = filtered.map((product) => {
  return `the ${product.name} is ${product.price / 2} rupees`;
});

// log the sale price to console
console.log(saleProducts);

// Example of a chaind array method.
const productsPracticeChainSec = [
  { name: "dress", price: 600 },
  { name: "cream", price: 60 },
  { name: "book", price: 200 },
  { name: "bottle", price: 50 },
  { name: "bedsheet", price: 350 },
];

// Writing the different array methods on different lines increases the readability
const saleProductsSec = productsPracticeChainSec
  .filter((product) => product.price > 100)
  .map((product) => `the ${product.name} is ${product.price / 2} rupees`);

document.write(saleProductsSec);

const vehicles = [
  { type: "car", brand: "Tesla", color: "red", price: 50000 },
  { type: "car", brand: "Toyota", color: "blue", price: 20000 },
  { type: "truck", brand: "Ford", color: "green", price: 40000 },
  { type: "SUV", brand: "Nissan", color: "beige", price: 35000 },
  { type: "car", brand: "Tesla", color: "gray", price: 80000 },
];

vehicles
  .filter((vehicle) => vehicle.type === "car" && vehicle.price > 20000)
  .sort((vehicle1, vehicle2) => vehicle1.price - vehicle2.price)
  .map((vehicle) =>
    console.log(
      `${vehicle.color} ${vehicle.brand} ${
        vehicle.type
      } is $${vehicle.price.toFixed(2)}`
    )
  );

// red Tesla car is $50000.00
// gray Tesla car is $80000.00
