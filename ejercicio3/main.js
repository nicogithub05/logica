
function AreaTriangulo(base, altura) {
    if(typeof base !== 'number' || typeof altura !== 'number') {
        return 'Ingresa un número entero válido'
    } 

    if(base <= 0 || altura <= 0) {
        return 'Los valores ingresados deben ser positivos'
    }

    let ResultArea = (base * altura) / 2;
    return ResultArea;
}

console.log(AreaTriangulo(5, 4)); 
console.log(AreaTriangulo(10, 6));  // Salida: 30
console.log(AreaTriangulo(-3, 4))


