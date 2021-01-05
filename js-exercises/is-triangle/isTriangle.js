function isTriangle(a,b,c) {
 return (a+b+c)%3==0?true:false;
}

module.exports = {
  isTriangle,
};
