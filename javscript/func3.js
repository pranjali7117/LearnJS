/*const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10*/


const myNums = [1,2,3]

/* FUNCTION: const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc+currval
}, 0)
console.log(myTotal)*/

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal); //output: 6

const shoppingcart = [
    {
    itemName: "js course",
    price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: " mobile dev course",
        price: 5999
    },
    {
        itemName: "data scientist course",
        price: 12999
    },      
]

const pricetoPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetoPay) // output:22996