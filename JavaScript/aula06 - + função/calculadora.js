function calculadora(){
    const operacao = Number(prompt("Escolha 1 operação:\n 1 - Soma(+)\n 2 - subtração (-)\n 3 - Multiplicação(*)\n 4 - divisão Real(/) \n 5 - Divisão Inteira(%)\n 6 - Potenciação (**)  "));
if (!operacao||operacao>=7){
    alert ("Erro operação Iválida!");
    calculadora();
}else {


let n1 = Number(prompt("insira o 1 valor"));
let n2 = Number(prompt("insira o 2 valor"));
let resultado;
if (!n1 || !n2){

    alert ("Parâmetros Inválidos");
    calculadora();
} else  {
    function soma(){
    resultado = n1 + n2;
    alert (` ${n1} + ${n2} = ${resultado}` )
    novaoperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert (` ${n1} - ${n2} = ${resultado}` )
        novaoperacao();
        }
        function multiplicacao (){
            resultado = n1 * n2;
            alert (` ${n1} *${n2} = ${resultado}` )
            novaoperacao();
            }
            function divisaoreal(){
                resultado = n1 / n2;
                alert (` ${n1} / ${n2} = ${resultado}` )
                novaoperacao();
                }
                function divisaointeira(){
                    resultado = n1 % n2;
                    alert (` o resto da divisao entre ${n1} e ${n2} é igual a ${resultado}` )
                    novaoperacao();
                    }
                    function potenciacao(){
                        resultado = n1 ** n2;
                            alert (` ${n1} elevado a ${n2}ª é igual a ${resultado}` )
                        
                        }
                        function novaoperacao (){
                            let opcao = prompt ("Deseja Nova Operação?\n 1 - Sim\n 2 - Não ");
                            if (opcao==1){
                                calculadora ();
                            } else if (opcao==2){
                                alert ("Até mais");
                            } else {
                                alert ("Digite uma opção válida")
                                novaoperacao();
    
                            }
                        }
                    }

 
                    


               



if (operacao==1){
    soma();
}else if (operacao==2){
    subtracao();
}else if (operacao==3){
    multiplicacao();

}else if (operacao==4){
    divisaoreal();
}else if (operacao==5){
    divisaointeira();
}else if (operacao==6){
    potenciacao();
}
}
}

calculadora ();
//https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript