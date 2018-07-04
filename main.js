// Average Price of All Items //

//
function pricemap(item) {
  return item.price;
}
var priceArray = items.map(pricemap)
var priceLength = priceArray.length

function sum(accum, i) {
  return accum + i;
}
var priceSum = priceArray.reduce(sum)
var priceAverage = priceSum / priceLength
var roundedAverage = priceAverage.toFixed(2)

// Answer Print //
console.log("The average price is $" + roundedAverage)





//---------------------------------------------------------------------//
// Array of items that cost between $14 - $18 USD //

// Pull Items by Price //
function priceCheck(item) {
  return item.price > 13.99 && item.price < 19.01;
}
var filteredItems = items.filter(priceCheck)
// Filter by Item Title //
function eachFilter(item) {
  console.log(item.title)
}
// Answer Print //
var priceFinal = filteredItems.forEach(eachFilter)





//-------// Find item with GBP Currency and print NAME & PRICE //------------//

// Pull Items by Currency //
function currencyCode(item) {
  return item.currency_code === "GBP";
}
var currencyFilter = items.filter(currencyCode)
// Filter by Item Title //
function eachFilter(item) {
  console.log(item.title)
}
// Answer Print //
var gbpFinal = currencyFilter.forEach(eachFilter)







//-------------// Show items made of wood //-----------------//
// map items with materials
function hasMaterials(item){
  return item.materials.indexOf("wood") != -1;
}
var hasMaterialsArray = items.filter(hasMaterials)
// Filter by Title //
function eachTitles(item){
  console.log(item.title)
}

// Answer Print //
hasMaterialsArray.forEach(eachTitles)





//-----------------// Show items made of 8+ materials //-----------------//
// map items with materials more than 7 //
function withMaterials(item){
  return item.materials.length > 7;
}
var withMaterialsArray = items.filter(withMaterials)

// filter by Title //
function eachName(item){
  console.log(item.title)
}
// Answer Print //
withMaterialsArray.forEach(eachName);


// items.filter(withMaterials).forEach(eachName);








//--------------// Calculate how many items are made by their sellers //------------//
// map items based on who made them //
function whoMade(items){
 return items.who_made;
}
// filter by i_did from who_made //
var whoMadeArray = items.map(whoMade)
function iDid(items){
  return items.who_made === "i_did";
}
var iMade = items.filter(iDid)
// Count the amount of i_did //
var countedIMade = iMade.length;
// Answer Print //
console.log(countedIMade)


















function demo() {
  return 2;
}

demo();

var sample = demo();
