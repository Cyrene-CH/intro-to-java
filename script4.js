var numarray = [0, 1, 2, 3, 4, 5, 6];
var a = Math.floor(Math.random() * numarray.length);
function lottery(num) {
  if (num == 0) {
    return "Thank you";
  } else if (num == 1) {
    return "Thank you";
  } else if (num == 2) {
    return "You've won $10!";
  } else if (num == 3) {
    return "Thank you";
  } else if (num == 4) {
    return "Thank you";
  } else if (num == 5) {
    return "You've won $1000!";
  } else if (num == 6) {
    return "Thank you";
  }
}

console.log(lottery(a));
