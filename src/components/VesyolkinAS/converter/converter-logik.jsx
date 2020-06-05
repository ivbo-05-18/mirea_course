const converterl = async (num, type1, type2) => {
  if (type1 === '' || type2 === '' || num === '') {
    return 0;
  }
  let t1 = 1;
  let t2 = 1;
  const data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => res.json());
  if (type1 !== 'RUB') {
    t1 = data.Valute[type1].Value;
  }
  if (type2 !== 'RUB') {
    t2 = data.Valute[type2].Value;
  }
  return (num * t1) / t2;
};

export default converterl;
