const alphabeticShift = input => {
  let asciis = input.split("").map((char) => char.charCodeAt(0));
  let shfitedInput=asciis.map((ascii) => ascii+1).map((ascii) => String.fromCharCode(ascii)).join("");
  return shfitedInput;
};

module.exports = { alphabeticShift };
