'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

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
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const day of Object.keys(restaurant.openingHours)) {
//   // console.log(day);
// }

// for (const day of Object.values(restaurant.openingHours)) {
//   // console.log(day);
// }
// //Entire Objects
// const enteries = Object.entries(restaurant.openingHours);

// for (const [key, { open, close }] of enteries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Optional Chaining
// const obj = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// };

// // // Without optional chaining
// // let result = obj.a.b.c;
// // console.log(result); // 42

// // obj.a = undefined;

// // // Without optional chaining, this will throw a TypeError
// // try {
// //   result = obj.a.b.c;
// //   console.log(result);
// // } catch (error) {
// //   console.error(error); // TypeError: Cannot read property 'b' of undefined
// // }

// // With optional chaining
// let result = obj?.a?.b?.c;
// console.log(result); // undefined

// const obj = {
//   name: 'John Doe',
//   address: {
//     city: 'London',
//     country: 'UK',
//   },
// };

// // Without optional chaining
// // let city = obj.address.city;
// // console.log(city); // London

// // obj.address = null;

// // // Without optional chaining, this will throw a TypeError
// // try {
// //   city = obj.address.city;
// //   console.log(city);
// // } catch (error) {
// //   console.error(error); // TypeError: Cannot read property 'city' of null
// // }

// // With optional chaining
// let city = obj?.address?.city;
// console.log(city); // undefined

// const result = restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Bahria',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// const [p, q, r = 'No data available'] = [8, 9];
// console.log(p, q, r);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);
// console.log(obj);

//Nested objects
// const { sat } = restaurant.openingHours;
// console.log(sat);

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

//Expaninding Arrays
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 Arrays
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. Not Objects
// const str = 'Iqbal';
// const letters = [...str, '', 'E.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   [prompt(`Let's make pasta! Ingredient 2?`)],
//   [prompt(`Let's make pasta! Ingredient 3?`)],
// ];
// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { ...restaurant, founder: 'Guisepppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr); //[1, 2, 3, 4]

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //1 2 (3) [3, 4, 5]

// const [pizza, , rissoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, rissoto, otherFood); //Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

//2) FUNCTIONS

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 2, 1, 5, 63, 1, 1, 12, 3);
// add(8, 3, 5, 4, 78, 5, 6);

// const x = [23, 5, 7];
// add(...x);

//Use ANY data type, return ANY data type, short-cicuiting
//Shortcruiting means if the first value is the truthy value and it will the first value and JS will not look at the other value
// console.log(3 || 'Iqbal');
// console.log('' || 'Iqbal');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('--- AND ---');

// console.log(0 && 'Iqbal');
// console.log(7 && 'Iqbal');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('musroom', 'spinach');

// console.log('---Nullish Coalescing Operator ??---');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: null and undefined ( NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

//Logical Assignment Operator
//OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

//nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// rest1.owner = rest1.owner && '<ANNOYMOUS>';
// rest2.owner = rest2.owner && '<ANNOYMOUS>';
// console.log(rest1);
// console.log(rest2);

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

// console.log(ordersSet);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();

// console.log(ordersSet);

// const nextOrder = [...new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta'])];
// console.log(nextOrder);

// console.log(new Set('Iqbal').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// const airline = 'Air Portugal';
// console.log(airline.slice(4, 5));

// console.log(airline.slice(0, airline.indexOf(' ')));

// Fix Capitalization in name
// const passenger = 'iqBal';
// const passengerLowercase = passenger.toLowerCase();
// // console.log(passengerLowercase);
// const passengerCorrect =
//   passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1);
// console.log(passengerCorrect);

// console.log(typeof passengerCorrect);

// Check emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passenger come to boardign door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));

// const updatedAnnouncement = announcement.replace(/door/g, 'gate');
// console.log(updatedAnnouncement);

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Airbus'));
// console.log(plane.endsWith('neo'));

//Split
console.log('a+very+nice+string'.split('+'));
console.log('Iqbal Erani'.split(' '));

const [firstName, lastName] = 'Iqbal Erani'.split(' ');
console.log(firstName);

//Join
const updateName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(updateName);

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(45, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4564854651));
console.log(maskCreditCard(4564854651545646));
console.log(maskCreditCard(4456464564641));

//Repeat
const message2 = 'Bad Weather... All Departures Delayed... \n';
console.log(message2.repeat(5));
