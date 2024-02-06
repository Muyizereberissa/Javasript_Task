
console.log(upper)
const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
const cheap = items.filter(item => item.price < 10)
console.log(cheap)
const expensive = items.filter(item => item.price >= 1000)
console.log(expensive)
const fullprice = items.reduce((totalPrice, currentItem) => totalPrice+currentItem)
console.log(fullprice)

const expensives = items.filter(item => item.price >= 10)
console.log(expensive)
const character = item => item.name.charAt(0).UpperCase === 'B'
const item = items.filter(character)
console.log(item)