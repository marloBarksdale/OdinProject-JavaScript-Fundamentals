const sumAll = function (a, b) {


    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }


    if(a <0 || b < 0){
        return "ERROR"
    }
  
        let larger = a;
        let smaller = b;

        if (b > larger) {
            larger = b;
            smaller = a;
        }



        let sum = 0;
        for (i = larger; i >= smaller; i--) {

            sum = sum + i;
        }

        return sum;
    


};

module.exports = sumAll;
