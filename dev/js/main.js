let num1 = 5;

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





