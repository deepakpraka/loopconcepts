// summation
function summation() {
    let sum = 0;

    for (let i = 1; i <=5; i++) {
        sum = sum +i;
        
    }

    return sum;
}
console.log(summation());
summation()  
// factorial
function factorial(n: number) {
        let fact = 1;
        for( let i = n; i > 0; i--)
        {
        fact = fact * i;
        }
        return fact;
    }
    console.log(factorial(3))

// function scream
    function scream(n: any) {
        let str = "";
        let i = 1;
        for (let i = 1; i <= n; i++) {
            str += "9"
        }
        return str;
    }
    console.log(scream(9))


// function modulus
function modulusscream(n:  any) {
    let str = "";

    for (let i = 1; i <= n; i++) {
             if (i%2 == 0) {
            str += "A";
        }
        else {
            str += "a";
        }
    }
    return str;
}
console.log(modulusscream(5))



// topDouble
function topDouble(value: number, top: number) {
    let result = value;
    for ( let i = value; i < top; i *= 2) {
        if (i * 2 < top) {
            result = result * 2;
        }
    }
    return result;
}
console.log(topDouble(1,5));