function sumarNumerosArreglo(numeros) {
    if (numeros instanceof Array) {
        let suma = 0;

        for(let i = 0; i < numeros.length; ++i) {
            suma += numeros[i];
            
        }

        return suma;
    } else {
    }
}

try {
    console.log(sumarNumerosArreglo([5, 12, 33, 45, 34, 24, 65, 76, 43]));  
} catch (error) {
    console.log(error);
}


