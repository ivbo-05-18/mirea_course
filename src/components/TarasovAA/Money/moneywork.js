function money(rub, type) {
  if (type === 'dol') {
    if (!Number.isNaN(rub) && rub > 0) {
      return `${(rub / 73.53).toFixed(2)}$`;
    }
    return 'Доллары';
  } if (type === 'eur') {
    if (!Number.isNaN(rub) && rub > 0) {
      return `${(rub / 79.8).toFixed(2)}€`;
    }
    return 'Евро';
  }
  return ' ';
}

module.exports = money;
