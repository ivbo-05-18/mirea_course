function calculate(a, b, c) {
  if ((a === '0' || a === '') && (b === '0' || b === '')) {
    return ('Введите коэффициент');
  } if (a === '0' || a === '') {
    return (`x1=${-c / b}`);
  }
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return ('Нет действительных корней');
  } if (D === 0) {
    return (`x1=x2=${-b / (2 * a)}`);
  }
  return (`x1=${(-b + Math.sqrt(D)) / (2 * a)};x2=${(-b - Math.sqrt(D)) / (2 * a)}`);
}
export default calculate;
