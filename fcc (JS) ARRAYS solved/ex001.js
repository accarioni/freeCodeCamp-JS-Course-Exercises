/* Build a Lunch Picker Program
A program that helps managing lunch options. Working with an array of lunches, adding and removing items from the array, and randomly selecting a lunch option.
*/ 

const lunches = [];

function addLunchToEnd(arr, str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  const removedItem = arr.pop();
  if(arr.length > 0) {
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  const removedItem = arr.shift();
  if(arr.length > 0) {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr){
  const randomIndex = Math.floor(Math.random() * arr.length);
  const getRandom = arr[randomIndex];
  if(arr.length > 0) {
    console.log(`Randomly selected lunch: ${getRandom}`);
  }
  else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr){
  if (arr.length > 0) {
    console.log("Menu items: " + arr.join(", "));
  }
  else {
    console.log("The menu is empty.");
  }
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]))