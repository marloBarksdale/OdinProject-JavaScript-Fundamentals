const findTheOldest = function(a) { 

let k = a[0];
return a.reduce((accumulator, currentValue)=>{

    
     function getAge(obj) {
       
        let age;
        if(obj.hasOwnProperty('yearOfDeath')){

             age = obj.yearOfDeath - obj.yearOfBirth;
        }
        else{
            age = new Date().getFullYear() - obj.yearOfBirth;
        }

            return age;

     }



     if(getAge(currentValue) < getAge(accumulator)){

        
        return accumulator;
     }


     return currentValue;
        

        



},k);




    
};

module.exports = findTheOldest;
