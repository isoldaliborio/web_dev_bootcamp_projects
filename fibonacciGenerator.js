function fibonacciGenerator(n) {
    var fibonacciList = [0,1]
    if (n == 1) {
        return [fibonacciList[n-1]]
    }
    else if (n ==2) {
        return fibonacciList
    }
    else if (n <= 0) {
        return "invalid number"
    }
    for (var count = 0; fibonacciList.length + 1 <= n; count++) {
        fibonacciList.push(fibonacciList[count] + fibonacciList[count+1]);
    }
    return fibonacciList;
}

console.log(fibonacciGenerator(2));