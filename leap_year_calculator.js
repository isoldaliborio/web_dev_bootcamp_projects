
function isLeap(year) {       
        if (
             (year % 4)  === 0 
             && ((year % 100) === 0 
             && (year % 400) === 0) 
             ) {
                 return "Leap year."
             }
             
        if (
             (year % 4)  === 0 
             && (year % 100) === 0
             && (year % 400) !== 0
             )  {
                return "Not leap year."
             }
             
         
        if (
             (year % 4)  === 0 
             && (year % 100) !== 0 
             ) {
             return "Leap year."
             }
         
        else {
             return "Not leap year." 
         }   
    }

console.log(isLeap(1987));