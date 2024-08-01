module.exports = function reverse (n) {
  let nString = n.toString();
  let newNumber = "";
  for (let i = nString.length - 1; i >= 0; i--){
  newNumber = newNumber + nString.charAt(i);
  }
  return parseInt(newNumber);
}
