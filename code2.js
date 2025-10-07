export function findOdd(array) {
  for (let i = 0; i < array.length; i++) {
    const count = array.filter(n => n === array[i]).length;
    if (count % 2 !== 0) {
      return array[i];
    }
  }
}


console.log(findOdd([1,1,2]));
console.log(findOdd([7]));