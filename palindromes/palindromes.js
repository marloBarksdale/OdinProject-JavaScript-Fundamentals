


 const palindromes =  function (a) {


    a = a.toLowerCase();
    let x = 0;
    let y = a.length - 1;



    let letterNumber = /[a-z]/g;

    let b = a.match(letterNumber);



    while (x < y) {


        while (!(b.includes(a.charAt(x))) && x < y) {
            x++;
        }


        while (!(b.includes(a.charAt(y))) && x < y) {

            y--;
        }


        if (a.charAt(x++) !== a.charAt(y--)) {
            return false;
        }


    }



    return true;




};


module.exports = palindromes;
