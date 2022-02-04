//1. Print odds 1-20
//Using a loop write code that will console.log all of the odd values from 1 up to 20.
function Loop(){
    for(var i = 1; i < 21; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
Loop();

//2. Decreasing Multiples of 3
//Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function multiples(){
    for(var i = 100; i > 2; i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}
multiples();

//3. Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
var i = 4;
function seq(){
    while(i > -4){
      console.log(i);
      i = i - 1.5;
    }
}
seq();

//4. Sigma
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log 
//the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum = 0;
function sigma(){
    for(var i = 1; i < 101; i++){
        sum += i;
    }
    console.log(sum);
}
sigma();

//5. Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end 
//console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
var product = 1;
function factorial(){
    for(var i = 1; i < 13; i++){
        product *= i;
    }
    console.log(product);
}
factorial();