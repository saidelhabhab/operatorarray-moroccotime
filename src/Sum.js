
const Sum = (array) =>{
    if (array.length !== 1 || array[0].length !== 2) {
        throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
      }
    
      const num1 = array[0][0];
      const num2 = array[0][1];
    
      const result = num1 + num2;
      return result;
}



export default Sum;



   