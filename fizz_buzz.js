/* Write a program that prints the numbers from 1 to 100. 
But for multiples of three print "FIzz" intead of the number and 
for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz". */


var output = [];

function fizzBuzz() {
    // while (count <=100) or you can do like below. 
    for (var count = 1; count <=100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
         else if (count % 5 === 0) {
             output.push("Buzz");
        }
        else {
            output.push(count);
        }
    }
    console.log(output);
}
fizzBuzz();