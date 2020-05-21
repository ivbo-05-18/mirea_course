const converterl = (num, type1, type2) => {
  if (type1 === '' || type2 === '' || num === '') {
    return 0;
  }
  const answer = (num * type1) / type2;
  return answer.toFixed(2);
};

export default converterl;
