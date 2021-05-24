const ftoc = function(num) {

 num = (num - 32) *(5/9);

return Math.round(num*10)/10;
};

const ctof = function(num) {

   num = (num *(9/5)) + 32;

  return Math.round(num*10)/10;
};

module.exports = {
  ftoc,
  ctof
};
