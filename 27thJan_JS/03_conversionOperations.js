let score="123"

//console.log(typeof score);
//typecasting means converting one datatype into another datatype

let ValueNumber= Number(score);
//console.log(typeof(ValueNumber));
//console.log(ValueNumber); //output-> NaN

//"22" =>22
//"123abc" =>NaN
//true =>1; false=>0

let someNumber="Alisha"

let stringNumber=String(someNumber)
//no point of typecasting string var to string var again
//console.log(stringNumber);
//console.log(typeof(stringNumber));

/*/***********operations */

let value=3
let negvalue= -value
//console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1="Alisha"
let str2="Jadhav"

let fullName=str1+" "+ str2
//console.log(fullName);

// console.log("1"+2);
// console.log("1"+2+2+"5");
// console.log("1"+(2+2)+"5");
//console.log((3+4)*5%3);
//console.log((+true));
//console.log(+"");

let num1,num2,num3

//num1=num2=num3=2+2
num1 = num2 = num3 = (3+4)*5%3
//console.table([num1,num2,num3]);

let gameCounter = 101
//++gameCounter; //pre-increament operator -> 100 -> 101
gameCounter++; //post-increament -> 100 print then value will change to 101
console.log(gameCounter);

