const masiv = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
const arithmeticMean = () => {
    const positive = []
    for(let i=0; i < masiv.length; i++) {
        if(masiv[i] > 0) {
            positive.push(masiv[i])
        }
    }
    let num = 0
    for(let i=0; i < positive.length; i++) {
        num = num + positive[i]
    }
    console.log(num / positive.length)
}
arithmeticMean()

const numbers = [1, 2, 5, 8, 9, 7, 3, 12, 23, 54, 80, 65, 40];
const sum =() => {
    let sumOfPositive = []
    let positiveValue = 0
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2=== 0){
            positiveValue = numbers[i] * numbers[i]
            sumOfPositive.push(positiveValue)
        }
    }
    console.log(sumOfPositive)
}
sum()


function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime())








