// 1. Build a Boolean Check Function - Function that checks whether a value is boolean or not.
/* Reasoning used:
    1. Create the booWho function and pass a parameter;
    2. Add the condition: if arg is a boolean value (true or false), return true. Otherwise, return false.
*/

function booWho (arg) {
    if (typeof arg === "boolean") {
        return true;
    }
    else {
        return false;
    }
}