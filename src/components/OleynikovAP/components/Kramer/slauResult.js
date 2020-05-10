const compDeterm = (matrix) => {
    let det = 0
    if (matrix.length === 2)
        return (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0])
    for (let j = 0; j < matrix.length; j++) {
        let minor = matrix.slice(1)
        for (let k = 1; k < matrix.length; k++)
            minor[k - 1] = matrix[k].slice(0, j).concat(matrix[k].slice(j + 1))
        det += Math.pow(-1, j) * matrix[0][j] * compDeterm(minor)
    }
    return det
}

const formMatrix = (matrix, type) => {
    let arr = []
    for (let j = 0; j < matrix.length; j++) {
        arr[j] = matrix[j].slice(0, matrix[j].length - 1)
        if (type) arr[j][type - 1] = matrix[j][matrix[j].length - 1]
    }
    return arr
}

const slauResult = matrix => {
    if (Array.isArray(matrix)) {
        for (let i = 0; i < matrix.length; i++) {
            if (!Array.isArray(matrix[i])) throw new Error("неверный формат данных");
        }

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length !== matrix.length + 1) throw new Error("неверный формат матрицы");
            for (let j = 0; j < matrix.length + 1; j++) {
                if (typeof (Number.parseFloat(matrix[i][j])) !== "number" || isNaN(matrix[i][j])) throw new Error("неверный формат данных в матрице");
                if (Math.abs(matrix[i][j]) === Infinity) throw new Error("входные данные слишком велики по модулю");
            }
        }
    } else throw new Error("неверный формат данных");

    let roots = new Array(matrix.length)
    if (matrix.length === 1) {
        if (matrix[0][0] !== 0) {
            roots[0] = matrix[0][1] / matrix[0][0]
            if (Math.abs(roots[0]) === Infinity) throw new Error("ответ - слишком большое число по модулю");
            if (roots[0] === -0) roots[0] = 0
            return { roots: roots }
        } else {
            return { roots: null }
        }
    }
    let d0 = compDeterm(formMatrix(matrix, 0))
    if (!d0) {
        return { roots: null }
    }
    for (let j = 0; j < matrix.length; j++) {
        roots[j] = compDeterm(formMatrix(matrix, j + 1)) / d0
        if (roots[j] === -0) roots[j] = 0
        if (Math.abs(roots[j]) === Infinity) throw new Error("ответ - слишком большое число по модулю");
    }
    return { roots: roots, det: d0 }
}

module.exports = slauResult