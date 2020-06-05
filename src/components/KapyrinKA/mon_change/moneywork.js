function money(rub, type, course) {
  if (type === 'dol') {
    if (!Number.isNaN(rub) && rub > 0 && !Number.isNaN(course) && course > 0) {
      return `${(rub / course).toFixed(2)}$`;
    }
    return 'Доллары';
  } if (type === 'eur') {
    if (!Number.isNaN(rub) && rub > 0 && !Number.isNaN(course) && course > 0) {
      return `${(rub / course).toFixed(2)}€`;
    }
    return 'Евро';
  }
  return ' ';
}

export default money;
