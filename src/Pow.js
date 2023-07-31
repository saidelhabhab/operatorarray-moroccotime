
const Pow = (arr)=>{
    if (arr.length !== 1 || arr[0].length !== 2) {
        throw new Error("Input array must be of the form [[base, exponent]] where base and exponent are numbers.");
      }
    
      const base = arr[0][0];
      const exponent = arr[0][1];
    
      const result = Math.pow(base, exponent);
      return result;

}


export default Pow; 