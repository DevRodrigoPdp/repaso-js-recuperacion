function esPrimo(num) {
    
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

esPrimo(6)