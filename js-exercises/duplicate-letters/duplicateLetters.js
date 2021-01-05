function duplicateLetters(...args) {
  let duplicateLetters=[];
  args.forEach(function(text){
      let letters=text.replace(/\s/g,"").split("").sort();
      letters.forEach(function(letter,index){
          if(index < letters.length-1){
            if(letter === letters[index+1]){
              duplicateLetters.push(letter);
            }
          }
      });
  });
  let duplicateCount=Array.from(new Set(duplicateLetters)).length;
  return duplicateCount==0?false:duplicateCount+1;
}

module.exports = {
  duplicateLetters,
};
