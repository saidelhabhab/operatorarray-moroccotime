const Sub = (arr) => {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }

  const minuend = arr[0][0];
  const subtrahend = arr[0][1];

  const result = minuend - subtrahend;
  return result;
}
  
export default  Sub;


  