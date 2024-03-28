// 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

// Teniendo una variable numérica que representa el número de lados de una figura geométrica,
//mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", 
//según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.


function tipoFigura(numLados, longitudDeLados) {
    
    if (numLados < 0) {
        console.log("Error: El número de lados debe ser mayor que cero.");
        return;
    }

    switch (numLados) {
        case 0:
            console.log("Círculo");
            break;
        case 1:
            console.log("No hay una figura definida con esta cantidad de lados.")
            break;
        case 2:
            console.log("No hay una figura definida con esta cantidad de lados.")
            break;
        case 3:
            console.log("Triángulo");
            break;
        case 4:
            console.log("Cuadrado");
            break;
        case 5:
            console.log("Pentágono");
            break;
        case 6:
            console.log("Hexágono");
            break;
        default:
            console.log("Polígono");
    }
  
    
    let pi = 3.14159
    let perimetroCirculo = 2 * pi * longitudDeLados
    let perimetro = numLados * longitudDeLados

    console.log(perimetro) // Cambiar la variable dependiendo de la operación a realizar.
}

tipoFigura(-1, 2) 

// El primer valor sera la cantidad de lados y el segundo el largo de los mismos. 
// En caso de ser un circulo el segundo sera el Radio del círculo.


