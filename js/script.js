var salario = document.getElementById('salario').value;
var dependentes = document.getElementById('dependentes').value;
var check = document.getElementById('checkbox') = 0.06;
var inss 
var irrf
var botao = window.getElementById("button")

botao.addEventListener("click", calc)

function calc(){
    var res = Number(1) + Number(2)
    window.alert(res)
}

if(salario <= 1212){

//function calc(){    
//inss = Number(salario) * Number(0.075);
//document.write("Resultado " + salario);
//window.alert(inss);
}

}

else if (salario >= 1213 && salario <= 2427)
{ 
    inss = Number(salario) * Number(0.09)
    document.write("Resultado " + salario)
}

else if(salario >= 2428 &&  salario <= 3641)
{ 

    inss = Number(salario) * Number(0.12)
    document.write("Resultado " + salario)

}else if(salario >= 3642 &&  salario <= 7087){ 
    inss = Number(salario) * Number(0.14)
    document.write("Resultado " + salario)
}


    

//var irrf =

//var valeTransporte = salario * 6%

//var salarioLiquido = salario- (inss + irrf + valeTransporte)