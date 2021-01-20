function* count(start=0, step=1){
  let result=start;
  while(true){
  yield result;
  result=result+step;
  }
}

function* cycle(iter,cycles){
  var loop=true;
  while(loop){
  for (const el of iter) {
    yield el;
    if(cycles!='undefined'){
      cycles--;
      if(cycles<1){
        return;
      }
    }
  }
}
}

function* repeat(value,repeatTimes){
  var loop=true;
  while(loop){
    if(repeatTimes!='undefined' && repeatTimes<1){
      return;
    }
    yield value;
    if(repeatTimes!='undefined'){
      repeatTimes--;
    }
  }
}


var countt=repeat('abcd',2);
console.log(countt.next());
console.log(countt.next());
console.log(countt.next());
console.log(countt.next());
console.log(countt.next());
module.exports = {
  count,
  cycle,
  repeat
}