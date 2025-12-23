

function esBisiesto(anyo){

    if((anyo % 4 === 0 && anyo % 100 !== 0 ) ||(anyo % 400 === 0) ){
        return 1
    }else{
        return 0
    }
    
}

