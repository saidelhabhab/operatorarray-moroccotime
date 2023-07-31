const Min =(arr) =>{
    
    if (arr.length !== 1 || arr[0].length !== 2) {
        throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
      }
    
      const num1 = arr[0][0];
      const num2 = arr[0][1];
    
      const result = Math.min(num1, num2);
      return result;

}

export default Min;