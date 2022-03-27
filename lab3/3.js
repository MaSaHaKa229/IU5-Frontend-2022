/**
 * Напишите функцию multiplyArray(arr, n),
 * на вход подается массив arr, и число n
 * необходимо вернуть новый массив, в котором все числа в n раз больше исходного
 * в массиве могут быть не только числа, эти элементы должны соответствовать исходным (не числа не трогать)
 * Примеры:
 * [1, 2, 3, 'ddd', {min: 1}, 22, false], 2 -> [2, 4, 6, 'ddd', {min: 1}, 44, false]
 */

function multiplyArray(arr, n) {
    let n_arr = arr; // т.к. нужен новый, а не измененный старый
    for (let i = 0; i < n_arr.length; ++i) {
        if (typeof(n_arr[i]) == 'number') {
            n_arr[i] *= n;
        }
    }
    return n_arr;
}

module.exports = multiplyArray;