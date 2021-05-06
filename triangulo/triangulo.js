function conversion(){
    var Num1=parseInt(document.getElementById('Num1').value);
    var Num2=parseInt(document.getElementById('Num2').value);
    var Num3=parseInt(document.getElementById('Num3').value);
    var result;
result;
            
            if(Num1==Num2 && Num2==Num3) {
               console.log(' El triangulo es equilatero ');
               alert(" El triangulo es equilatero");
            } else if(Num1==Num2 || Num2==Num3 || Num1==Num3) {
                console.log(' El triangulo es isosceles ');
                alert("El triangulo es isosceles");
            } else { //(Num2!=Num3 && Num3!=Num4)
                console.log(' El triangulo es escaleno ');
                alert("El triangulo es escaleno");
            }
 } 