const  Div = (arr)  =>{
    if (arr.length !== 1 || arr[0].length !== 2) {
      throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
    }
  
    const numerator = arr[0][0];
    const denominator = arr[0][1];
  
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }
  
    const result = numerator / denominator;
    return result;
  }


export default Div ;
