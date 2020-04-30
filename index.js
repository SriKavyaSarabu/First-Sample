function printUserName(){
  document.getElementById("displayUserName").innerHTML = document.getElementById("userName").value;
}


function findOddEven(){
    var num = document.getElementById('num').value;
    if ( num % 2 == 0) {
        document.getElementById('displayEvenOdd').innerHTML = num + ' is a Even number';
    }else{
        document.getElementById('displayEvenOdd').innerHTML = num + ' is a Odd number';
    }
}    

function findPrimeNumber(){
    var primeNumber = document.getElementById('primeNumber').value;
    var isPrimeNumber = true;
    for( var i=2; i < primeNumber; i++){
        if(primeNumber % i === 0 ){
            console.log("Not a prime");
            isPrimeNumber = false;
            break;
        }
    }
            
    if(isPrimeNumber){   
        document.getElementById('displayPrimeNumber').innerHTML = primeNumber + ' is a prime Number';
    }
    else{
        document.getElementById('displayPrimeNumber').innerHTML = primeNumber + ' is not a prime Number';
    }
    
        
}


function findFactorial(){
    var factnumber = parseInt( document.getElementById("factnumber").value);
    if ( isNaN(factnumber)){
        alert(" Enter valid number ");
        return;
    }
    var factorial = calcFact(factnumber);
    document.getElementById("displayFactorial").innerHTML = factorial;
}
    function calcFact( factnumber ) {
    var i;
    var fact = 1;
    for( i = factnumber; i >= 1; i-- ){
        fact = fact * i;
    }
        return fact;
    }

