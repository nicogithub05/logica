console.log('Hola mundo')
console.log('Hola mundo2')


function AreaTriangulo(base, altura) {
    if(typeof base !== 'number' || typeof altura !== 'number') {
        return "Ingresa un número válido"
    }
    if(base <= 0 || altura <= 0) {
        return "Ingresa numeros positivos"
    }

    area = (base * altura) / 2
    return area
}


console.log(AreaTriangulo(5, 4)); 
console.log(AreaTriangulo(10, 6));  
console.log(AreaTriangulo(-3, 4));
