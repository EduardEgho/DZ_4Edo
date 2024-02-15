//Цикл должен проходится по массиву и просто выводить среднюю арифметическую
const numbers = [10, 15, 20, 25, 30];
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}
average = average / numbers.length;
console.log("Среднее значение в массиве:", average);

//переменная ''let average = 0;'' была написанна внутри цикла поэтому и обнулялось при интерпритации


