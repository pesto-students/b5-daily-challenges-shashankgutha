function isTriangle(line1,line2,line3) {
 return !(line1 + line2 <= line3 || line1 + line3 <= line2 || line2 + line3 <= line1);
}

module.exports = {
  isTriangle,
};
