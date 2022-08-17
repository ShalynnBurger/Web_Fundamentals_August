// var countPositives = 0;

// var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// // your code here!
    
// console.log("there are " + countPositives + " positive values");

//above code is what was given from CodingDojo, code below is from lecture. 

var countPositives = 0;

var numbers = [3, 4, -2, 7, 16, -8, 0];
    //         0   1  2  3   4   5   6
for(var i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        countPositives +=1;
    }
}
    
console.log("there are " + countPositives + " positive values");