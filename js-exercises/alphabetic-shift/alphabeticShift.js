const alphabeticShift = input => {
  let asciiArray = input.split("").map((char) => char.charCodeAt(0));
  let shfitedInput=asciiArray.map((ascii) => ascii+1).map((ascii) => String.fromCharCode(ascii)).join("");
  return shfitedInput;
};

module.exports = { alphabeticShift };
