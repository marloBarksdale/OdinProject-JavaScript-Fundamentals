const fibonacci = function (a) {



    a = parseInt(a);


    if (a < 0) {
        return "OOPS";
    }
    if (a === 0) {
        return 0;
    }


    if (a === 1) {
        return 1;
    }



    return fibonacci(a - 2) + fibonacci(a - 1);



};

module.exports = fibonacci;
