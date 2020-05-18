function GaussianElim(matrixToSolve) {
  // Матрица на входе включает n строк, где n - кол-во уравнений.
  // Элемент из вектора результатов записывается как (n + 1)ый элемент строки.
  // Например, система из одного ур-ия 2x = 3 в виде матрицы будет выглядеть как [2, 3].

  // Проверка входных данных
  // Проверить является ли объект на входе массивом
  // (массив может быть матрицей, если все его эл-ты - массивы)

  if (Array.isArray(matrixToSolve)) {
    const n = matrixToSolve.length; // Кол-во строк матрицы - кол-во уравнений
    // Проверить, матрица ли на входе
    for (let i = 0; i < n; i++) {
      if (!Array.isArray(matrixToSolve[i])) {
        throw new Error('неверный формат данных');
      }
    }

    // Проверка формата матрицы и типов данных, идём по строкам
    for (let i = 0; i < n; i++) {
      // Проверяем, что матрица имеет правильный формат в этой строке - n+1 стоблцов
      if (matrixToSolve[i].length !== n + 1) {
        throw new Error('неверный формат матрицы');
      }
      // Проверяем типы данных в текущей строке
      for (let j = 0; j < n + 1; j++) {
        if (typeof (matrixToSolve[i][j]) !== 'number' || Number.isNaN(matrixToSolve[i][j])) {
          throw new Error('неверный формат данных в матрице'); // Проверяем, что в кажой ячейке строки хранится число
        }
        if (Math.abs(matrixToSolve[i][j]) === Infinity) {
          throw new Error('входные данные слишком велики по модулю');
        }
      }
    }
  } else {
    throw new Error('неверный формат данных');
  }

  // Создаём копию двумерного массива, чтобы не менять исходный
  const n = matrixToSolve.length;
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = matrixToSolve[i].slice();
  }

  // Прямой ход - преобразование матрицы, идём по главной диагонали
  for (let i = 0; i < n; i++) {
    // Будем выбирать максимальный по модулю элемент в столбце как опорный
    // (иначе возникают погрешности и проблемы, если элемент в текущем ряду = 0)
    // Ищем максимальный по модулю элемент в столбце
    let maxElem = Math.abs(matrix[i][i]);
    let maxElemRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > maxElem) {
        maxElem = Math.abs(matrix[j][i]);
        maxElemRow = j;
      }
    }

    // Если максимальный по модулю элемент = 0, то весь столбец нулевой и решений нет
    if (maxElem === 0) {
      return undefined;
    }

    // Поменять местами ряды, чтобы сверху стоял ряд с максимальным элементом
    const rowToSwap = matrix[i];
    matrix[i] = matrix[maxElemRow];
    matrix[maxElemRow] = rowToSwap;

    // Вычесть из нижних рядов текущий ряд так, чтобы в них в этом столбце остались нули
    for (let j = i + 1; j < n; j++) {
      const coef = matrix[j][i] / matrix[i][i];
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= coef * matrix[i][k];
      }
    }
  }

  // Решить уравнение
  const x = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    // Если коэффициент или значение ур-ия равны бесконечности, то ответ нельзя посчитать
    if (Math.abs(matrix[i][i]) === Infinity || Math.abs(matrix[i][n]) === Infinity) {
      throw new Error('входные данные слишком велики по модулю');
    }

    // Если коэффициент = 0, то у системы нет однозначных решений
    if (matrix[i][i] === 0) {
      return undefined;
    }

    x[i] = matrix[i][n] / matrix[i][i];

    // Если x = Infinity, то ответ слишом большой
    if (Math.abs(x[i]) === Infinity) {
      throw new Error('ответ - слишком большое число по модулю');
    }

    // Подставить значение найденого корня (вычесть из значений оставшихся выражений)
    for (let j = i - 1; j >= 0; j--) {
      matrix[j][n] -= matrix[j][i] * x[i];
    }
  }

  return x;
}

export default GaussianElim;
