# what is this ?
- use all operator on Array
- use Morocco time 

# installation 
` npm i operatorarray-moroccotime`

then ====>

´´´
- import {Multi,Div,Sum,Sub,Pow,Ciel,Max,Min,Floor,DateTimeInArabicMorocco} from 'operatorarray-moroccotime';


- //Input array must be of the form [[a, b,...]] or [[a, b,...],[c, d,....], .....] where a and b are numbers.
- // Function to create a power operator for a 2-dimensional [[base, exponent]] array

- // Example Multi,Div,Sum,Sub,Max,Min,Pow
try {
  const result = Sub(array);
  console.log(result); // Output: -----
} catch (error) {
  console.error(error.message);
}


- // Example floorOperator
const inputArray = [12.5,1.4,3.9];
const outputArray = floorOperator(inputArray);
console.log(outputArray); // Output: [12, 1, 3]

- // Example ceilOperator
const inputArray = [12.5, 1, 3.4];
const outputArray = ceilOperator(inputArray);
console.log(outputArray); // Output: [13, 1, 4]

- // Example usage: Display the current date and time in Arabic (Morocco)
DateTimeInArabicMorocco();


´´´

# options 

** DateTimeInArabicMorocco
** Multi,Div,Sum,Sub,Max,Min,Pow

# By
SAID EL-HABHAB & MOHAMMED BEDDIBI