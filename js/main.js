/* let num1 = 5;

let num2 = 1;

if (num1 > 0) {
    if (num2<0) {
        console.log("num1 es mayor que cero y num2 es menor que cero");
    } else if (num2>0) {
        console.log("num1 y num1 son mayores que cero");
    } else {
        console.log("num1 es mayor que cero y num2 es igual que cero");
    }
} else if (num1 < 0) {
    if (num2 < 0) {
        console.log("num1 y num2 son menores que cero");
    } else if (num2 > 0) {
        console.log("num1 es menor que cero y num2 es mayor que cero");
    } else {
        console.log("num1 es menor que cero y num2 es igual que cero");
    }
} else {
    if (num2 < 0) {
        console.log("num1 es igual a cero y num2 es menor que cero");
    } else if (num2 > 0) {
        console.log("num1 es igual que cero y num2 es mayor que cero");
    } else {
        console.log("num1 y num2 son iguales que cero");
    }
}

let num3 = 10;

switch (num3) {
    case 2:
        if (num3 == 1) {
            console.log("sgdsdaag");
        } else {
            console.log("afqrq");
        }
        break
    case 5:
        console.log("num3 es igual a 5");
        break;
    case 10:
        console.log("num3 es igual a 10");
        break
    default:
        console.log("num3 es igual a 0");
        break;
}

for (i = 0; i < 10; i++) {
    console.log(i);
}

let p = 0;

do {
    console.log(p);
    p++;
} while (p<10);


let name = "juan";

let lastname = "diego";

console.log(`hola ${name} ${lastname}`); 



let num4 = 4;

let num5 = 5;

if (num4 % 2 == 0) console.log(`${num4} es par`);
else console.log(`${num4} es impar`);

(num4 % 2 == 0) ? console.log(`${num4} es par`) : console.log(`${num4} es impar`)

(num4 % 2 == 0) ? 
    (
        console.log(`${num4} es par`),
        console.log(`${num4} es par 2`) 
    )
    : 
    (
        console.log(`${num4} es impar`),
        console.log(`${num4} es impar`)
    )

*/

let numeros = [1,2,3,4];

let palabras = ['hola', 'avion', 'arbol'];

console.log(numeros.length);

console.log(Array.isArray(palabras));

console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.pop();
console.log(numeros);








