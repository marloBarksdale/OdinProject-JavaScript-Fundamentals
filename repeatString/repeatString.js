const repeatString = function(string, num) {

    if(num<0){
        return "ERROR";
    }     
    
    let s = '';
        for(i=0 ; i < num; i++){
            s = s+string;
        }
    
            return s;
};

 

module.exports = repeatString;
