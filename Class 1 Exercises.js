/**
 * MATH
 */
// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
// Establishes the size for both types of Pizzas
const SMALL_PIZZA_DIAMETER = 13
const LARGE_PIZZA_DIAMETER = 17
// Calculates the area for both pizza sizes using area formula
const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER/2)**2)
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER/2)**2)

// 2. What is the cost per square inch of each pizza?
// Establishes the price of both pizza sizes
const SMALL_PIZZA_PRICE = 16.99
const LARGE_PIZZA_PRICE = 19.99
//Calculates price of pizza per square inch
const smallPizzaPricePerSquareInch = SMALL_PIZZA_PRICE / smallPizzaArea
const largePizzaPricePerSquareInch = LARGE_PIZZA_PRICE / largePizzaArea

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
// Establishes the range from lowest to highest values from 1-13
const LOWEST_CARD = 1
const HIGHEST_CARD = 13


// 4. Draw 3 cards and use Math to determine the highest card
//Three cards, setting the random value to only be up to the highest card value
const card1 =  Math.ceil(Math.random() * HIGHEST_CARD)
const card2 =  Math.ceil(Math.random() * HIGHEST_CARD)
const card3 =  Math.ceil(Math.random() * HIGHEST_CARD)

const highestCard = Math.max(card1,card2,card3)
console.log(card1)
console.log(card2)
console.log(card3)
console.log(`Highest card is: ${highestCard}`)

/**
 * ADDRESS LINE
 */
// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = `Pablo`;
const lastName = `Rojas`;
const streetAddress = `226 74th St. SE.`;
const city = `Everett`;
const state = `WA`;
const zipCode = `98036`;

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//created variable addressLine to output a addressLine from all the variables above
const addressLine = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`
//prints addressLine
console.log(addressLine)
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
//extracts first name and outputs the first name only
const extractedName = addressLine.slice(0, firstName.length)
console.log(`Extracted First Name: ${extractedName}`)
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.
// Establishes date variables
const startDate = new Date(2020, 0, 1)
const endDate = new Date(2020, 3, 1)
console.log(startDate.getTime()) // 1577865600000
console.log(endDate.getTime())   // 1585724400000
const dateFormula = (startDate.getTime() + endDate.getTime()) / 2
console.log(dateFormula) // 1581795000000 | I need to convert this into (year/month/day) format
const middleDate = new Date(dateFormula)
// following lines of code break down milliseconds into (year/month/day) format
const middleYear = middleDate.getFullYear()
const middleMonth = middleDate.getMonth() + 1 // +1 to account for index starting at zero
const middleDay = middleDate.getDay()
console.log(`Middle Date: ${middleYear} ${middleMonth} ${middleDay}`)
