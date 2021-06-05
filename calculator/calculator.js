const add = function(a,b) {

  return a + b;


	
};

const subtract = function(a,b) {
	
  return a-b;
};

const sum = function(arr) {

    return Array.from(arr).reduce(function(accumulator, currentValue){

          return accumulator + currentValue;
    } , 0);
	
};



const multiply = function(arr) {

  return arr.reduce(function(a, b){

    return a*b;

  }, 1); 
};

const power = function(a, b) {
	
      if(b === 0)
      return 1;

      return a * power(a, b-1);


};

const factorial = function(a) {
	
  if(a === 0 || a=== 1)
    return 1;

    return a* factorial(a-1);

};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
