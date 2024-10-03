'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'bheem ka dhabaha',
  location: 'faltu dhabha , dholakpur',
  categories: ['Indian', 'kashmiri', 'Vegetarian', 'Organic'],
  starterMenu: ['pakode', 'Bread sandwich', 'Garlic Bread', 'pizza puff'],
  mainMenu: ['Paneer makhni', 'Paneer burji', 'Rajma chawal'],


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex=1, mainIndex=0,time='20:00',address})
  {
    console.log(`Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  OrderPaneerMakhni: function(ing1,ing2,ing3){
    console.log(`here is your deleicious paneer makhni with ${ing1}, ${ing2}, ${ing3}`);
  }
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'dolma aunty momos',
  mainIndex:2,
  starterIndex: 2
});

console.log('*************************************************');
restaurant.orderDelivery({
  address: 'cheem tapak dam dam',
  starterIndex: 1,
});

/*const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] =arr;
console.log(x,y,z);

let [main,secondry] = restaurant.categories;
console.log(main,secondry);

/*const temp = main;
main = secondry;
secondry = temp;
console.log(main, secondry);

[main,secondry] =[secondry,main];
console.log(main, secondry);

console.log(restaurant.order(2,0));

const nested = [2,4, [5,6]];
/*const [i,,j] = nested;
console.log(i,j);

const [i,,[j,k]] = nested;
console.log(i,j,k);

//whwn length unknownn

//default values
/*const [p,q,r] = [8,9];
console.log(p,q,r);

//r undefined so set to default;
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
*/

const {name, openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const {
  name: restaurantName, 
  openingHours:hours,
categories: tags
 } = restaurant;
 console.log(restaurantName,hours,tags);

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu,starters);

//mutating values

let a = 111;
let b = 999;
const obj =  {a: 23, b:7, c:14};
({a,b} = obj);
console.log(a,b);

//nested objects

const {fri:{open:o,close:c}}= openingHours;
console.log(o,c);

/*const arry = [7,8,9];
const NewBAdArry = [1,2,arry[0],arry[1],arry[2]];
console.log(NewBAdArry)

const newArr = [1,2, ...arry];
console.log(newArr);

console.log(...newArr);*/


const newMenu = [...restaurant.mainMenu, 'aloo parantha'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const Menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(Menu);

//spread operator work on iterator-ables
//iterables are array, strings, map, sets but not objects

/*const ingredients = [
      prompt('let\s make paneer makhni! ingredient 1'),
      prompt('ingredient 2'),
      prompt('ingredient 2'),];

      console.log(ingredients);*/


//restaurant.OrderPaneerMakhni(ingredients[0],ingredients[1],ingredients[2]);

//ingredients.restaurant.OrderPaneerMakhni(...ingredients);


//example:

const newRestaurant = {
  foundedIn: 1998,
...restaurant,
founder: 'indumati'};
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'kalia ka adda';
console.log(restaurantCopy.name);
console.log(restaurant.name);



