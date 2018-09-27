module.exports =function check(str, bracketsConfig) {
  let validation = [];
  let strArr = str.split('');
  
  let lenB = bracketsConfig.length;
  let lenA = strArr.length;
  
  
  
  for (let a = 0; a < lenA; a++){
      for (let i = 0; i < lenB; i++){
              if (strArr[0] === bracketsConfig[i][1]){
                  return false;
              }
              if (strArr[a] === bracketsConfig[i][0]){
                  validation.push(1);
              } else {
                  validation.pop()
              }
  
          
      }
  
  }
  
  if (validation.join('')===''){
      return true;
  }else {
      return false;
  }
  
  }   
