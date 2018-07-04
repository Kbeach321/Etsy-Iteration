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

// console.log("The average price is $" + roundedAverage)





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
// var priceFinal = filteredItems.forEach(eachFilter)





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
// var gbpFinal = currencyFilter.forEach(eachFilter)







//-------------// Show items made of wood //-----------------//

//
// function forMaterials(item){
//   console.log(item.materials);
// }
// var materialsUsed = items.forEach(forMaterials)
//
// function forWood(materials){
//   return
// }
//
// var woodUsed = materialsUsed.filter(forWood)
//







// Show items made of 8+ materials //


// Calculate how many items are made by their sellers //
function whoMade(items){
 return items.who_made;
}
var whoMadeArray = items.map(whoMade)

function iDid(items){
  return items.who_made === "i_did";
}
var iMade = items.filter(iDid)
console.log(iMade)
