function calculate(a, b, c) {
  let answer = {};
  if ((a === '0' || a === '') && (b === '0' || b === '')) {
    answer = {
      flag: 3,
    };
    return answer;
  }
  if (a === '0' || a === '') {
    const x1 = -c / b;
    answer = {
      x1,
      flag: 2,
    };
    return answer;
  }
  const D = b * b - 4 * a * c;
  if (D >= 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    answer = {
      flag: 1,
      x1,
      x2,
    };
  } else {
    answer = {
      flag: 0,
    };
  }
  return answer;
}
export default calculate;
