/*
function fibonaci(n: number) {
    let sum = 2;
    if(n<0){
        return "False";
    }
    if(n==1){
        console.log(n);
        return n;
    }
    if(n==2){
        console.log(1);
        console.log(1);
        return sum;
    }
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    console.log(1);
    console.log(1);
    for (let i: number = 2; i < n; i++) {
        f0 = f1;
        f1 = fn;
        fn = f1 + f0;
        console.log(fn);
        sum += fn;
    }
    return sum;
}
console.log("Tong cua day fibo la: " + fibonaci(5));*/
function fibonaci1(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 1;
    }
    return fibonaci1(n - 1) + fibonaci1(n - 2);
}
var sum = 0;
var n = 5;
for (var i = 1; i <= n; i++) {
    console.log(fibonaci1(i));
    sum += fibonaci1(i);
}
console.log("Tong day fibo la: " + sum);
