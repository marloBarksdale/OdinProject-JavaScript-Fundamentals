

const removeFromArray = function(array, ...data) {

  for(i = 0; i< data.length; i ++){

        let count = 0;

        while(count < array.length){

               if(array[count]===data[i]){
                array.splice(count,1);
            }
            else{
                count++;
            }


        }

  }
  return array
   
    

};

module.exports = removeFromArray;
