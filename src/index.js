module.exports = function getZerosCount(number, base) {
  
  let currBase = base;
  let result = Number.MAX_VALUE;

  let getFactZeros = (base) => {
      let count = 0,
      i = Math.floor(number/base);
      
      while (i > 0) {
          count += i;
          i = Math.floor(i/base);
      }
      return count;
  };

  let getBaseZeros = (base) => {
      let count = 0;
      while (currBase % base === 0) {
          currBase = currBase / base;     
          count++;
      }
      return count;
  };

  for (let i = 2; i <= base; i++) {
      if (currBase % i !== 0) continue;
      let baseZeros = getBaseZeros(i),
          factZeros = getFactZeros(i);
      result = Math.min(Math.floor(factZeros / baseZeros), result);
  }
  return result;
}
