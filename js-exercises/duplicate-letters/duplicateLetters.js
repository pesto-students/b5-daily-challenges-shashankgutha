function duplicateLetters(...args) {
  let duplicateLetter="";
  args.forEach(function(text){
      let letters=text.replace(/\s/g,"").split("").sort().join("").match(/(.)\1*/g);
      letters.forEach(function (letter){
        if(letter.length > duplicateLetter.length) {
          duplicateLetter = letter;
        }
      });
  });
  console.log(duplicateLetter);
  return duplicateLetter.length<=1?false:duplicateLetter.length;
}

module.exports = {
  duplicateLetters,
};
