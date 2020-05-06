function GaussianElim(matrix) {
    // Матрица на входе включает n строк, где n - кол-во уравнений.
    // Элемент из вектора результатов записывается как (n + 1)ый элемент строки.
    // Например, система из одного ур-ия 2x = 3 в виде матрицы будет выглядеть как [2, 3].

    // Кол-во строк матрицы - кол-во уравнений
    var n = matrix.length;

    // Прямой ход - преобразование матрицы, идём по главной диагонали
    for (let i = 0; i < n; i++) { 
        // Будем выбирать максимальный по модулю элемент в столбце как опорный (иначе возникают погрешности и проблемы, если элемент в текущем ряду = 0)
        // Ищем максимальный по модулю элемент в столбце
        var maxElem = Math.abs(matrix[i][i]);
        var maxElemRow = i;
        for (let j = i+1; j < n; j++) { 
            if (Math.abs(matrix[j][i]) > maxElem) {
                maxElem = Math.abs(matrix[j][i]);
                maxElemRow = j;
            }
        }
        
        if (maxElem === 0) return undefined; // Если максимальный по модулю элемент = 0, то весь столбец нулевой и решений нет

        // Поменять местами ряды, чтобы сверху стоял ряд с максимальным элементом
        var rowToSwap = matrix[i];
        matrix[i] = matrix[maxElemRow];
        matrix[maxElemRow] = rowToSwap;

        // Вычесть из нижних рядов текущий ряд так, чтобы в них в этом столбце остались нули
        for (let j = i+1; j < n; j++) { 
            var coef = matrix[j][i] / matrix[i][i];
            for (let k = i; k < n+1; k++) { 
                matrix[j][k] -= coef * matrix[i][k];
            }
        }
    }

    // Решить уравнение
    var x = new Array(n);
    for (let i = n-1; i >= 0; i--) { 
        x[i] = matrix[i][n]/matrix[i][i];
        if (x[i] === Infinity) return undefined; // Если x = Infinity, то у системы нет однозначных решений
        for (let j = i-1; j > -1; j--) { 
            matrix[j][n] -= matrix[j][i] * x[i];
        }
    } 

    return x;
}

module.exports = GaussianElim;