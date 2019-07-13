function reverseNumber(num){
    let digit, revNum = 0;
    
    while(num){
        digit = num % 10;                 
        revNum = (revNum * 10) + digit; 
        num = num/10|0; 
    }  
  
    return revNum;
}

reverseNumber(123); //=> 321
reverseNumber(-456); //=> -654
reverseNumber(10000); //=> 1
