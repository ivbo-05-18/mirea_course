const getResult = (text) => {
  const resArray = [];
  const sentAll = text.split(/[.!?]/);
  let long = sentAll[0];
  let short = sentAll[0];
  for (let i = 1; i < (sentAll.length - 1); i++) {
    const sentence = sentAll[i];
    if (sentence.length < short.length) {
      short = sentence;
    } else if (sentence.length > long.length) {
      long = sentence;
    }
  }
  resArray.push(short, long);
  return resArray;
};
module.exports = getResult;
