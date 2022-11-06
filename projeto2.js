var peso, altura, resultado, imc;



function validar(){
    peso = document.getElementById("peso");
    altura = document.getElementById("altura");
    imc = peso/(altura ** 2);

    if (imc < 17){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Resultado: " + imc.toFixed(2);
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';
        return false;
    }

    else if (imc > 17 && imc < 18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Resultado: " + imc.toFixed(2);
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';
        return false;
    }

    else if (imc > 18 && imc < 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Resultado: " + imc.toFixed(2);
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';
        return false;
    }

    else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Resultado: " + imc.toFixed(2);
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';
        return false;
    }
    else{
        return false;
    }
}