// You can use the function from the `Math` module.
function sqrt(num){
  return Math.sqrt(num);
}

function power(baseNum,powerNum){
  return Math.pow(baseNum,powerNum);
}

function round(doubleNum){
  return Math.round(doubleNum);
}

// Don't change the exported names. 
module.exports = {
  sqrt,
  power,
  round,
};
