module.exports = function check(str, bracketsConfig) {

    str = str.trim().split(''); 
    str = str.filter(el => { 
    return el !== ' '; 
    }) 
    let prov = 0; 
    while (str.length !== 0 && prov !== str.length){ 
    prov = str.length; 
    str.forEach((el, index, arr) => { 
    bracketsConfig.forEach(brackets => { 
    if (el === brackets[0].trim() && arr[index + 1] === brackets[1].trim()) { 
    arr[index] = true; 
    arr[index + 1] = true; 
    } 
    }) 
    }) 
    str = str.filter(el => { 
    return el !== true; 
    }) 
    } 
    
    if(str.length === 0) 
    return true; 
    else 
    return false; 
    }
