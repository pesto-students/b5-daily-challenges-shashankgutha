let bigInt = require('big-integer');
function addBigIntegers(intString) {
   let numbers= intString.split("\n");
   let output=0;
   numbers.forEach((number) => {
    output=bigInt(output).plus(number);
   });
  return bigInt(output).toString();
}


module.exports = { addBigIntegers };
