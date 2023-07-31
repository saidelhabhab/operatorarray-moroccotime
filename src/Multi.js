const  Multi =(arr)=> {

    if (arr.length !== 1 || arr[0].length !== 2) {
      throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
    }
  
    const factor1 = arr[0][0];
    const factor2 = arr[0][1];
  
    const result = factor1 * factor2;
    return result;
  }

  export default Multi;