
function curry(func){
  
 return function curriedFn(...args){
      if(args.length>=func.length){
        return func.apply(this,args);
      }else{
        return function(...args2){
          return curriedFn.apply(this,args.concat(args2));
        }
      }
 }
  
}



module.exports = curry;
