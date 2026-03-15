// 4. Build a Card Counting Assistant - Function to assist with card counting in Blackjack.
/* Reasoning used:
    1. Create a global count variable and initialize it to 0;
    2. Create a function called cardCounter that receives a parameter card,
       which can be either a number or a string;
       Using switch case:
        If the card is 2, 3, 4, 5, or 6 → increase count by 1;
        If the card is 7, 8, or 9 → count remains unchanged;
        If the card is 10, "J", "Q", "K", or "A" → decrease count by 1;
    3. The cardCounter function should return a string containing the current
       count value:
       - If count > 0 → return count + " Bet"
       - If count ≤ 0 → return count + " Hold"
*/

let count = 0;

function cardCounterAlt (card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count += 1
        break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count -= 1
        break;
    }
    if (count > 0) {
    return count + " " + "Bet";
  }
  else {
    return count + " " + "Hold";
  }
}
