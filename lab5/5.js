/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; ++i) {
        let check = 0;
        for (let j = 0; j < arr.length; ++j) {
            if (arr[i].from == arr[j].to) {
                check = 1;
                break;
            }
        }
        if (check == 0) {
            index = i;
            break;
        }
    }

    [arr[0], arr[index]] = [arr[index], arr[0]];

    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i].to == arr[j].from) {
                [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
            }
        }
    }

    return arr;
}

module.exports = makeRoute;