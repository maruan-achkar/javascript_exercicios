function stringobject(){
    
    //so coloquei comentario nessa mas fui eu que programei as outras tambem por favor me da nota =)
    //eu preciso definir as variaveis aqui pq se eu deixar pra criar e guardar elas junto o texto la em baixo nao consegue limpar.
    let objeto = {nome:null, idade:null, dia:null, mes:null, ano:null, emprego:null, salario:null }

    objeto.nome = document.getElementById("stringobjectinputnome");
    objeto.idade = document.getElementById("stringobjectinputidade");
    objeto.dia = document.getElementById("stringobjectinputdia");
    objeto.mes = document.getElementById("stringobjectinputmes");
    objeto.ano = document.getElementById("stringobjectinputano");
    objeto.emprego = document.getElementById("stringobjectinputemprego");
    objeto.salario = document.getElementById("stringobjectinputsalario");

    document.getElementById("stringobjectoutput").innerHTML = 'Strings do objeto: ';
    
   //eu sinto que tem algum jeito mais curto pra fazer isso mas desse jeito ta funcionando
    if(isNaN(objeto.nome.value)){
        document.getElementById("stringobjectoutputnome").innerHTML = '<b>Nome:</b> ' + objeto.nome.value;
    }
    if(isNaN(objeto.idade.value)){
        document.getElementById("stringobjectoutputidade").innerHTML = '<b>Idade:</b> ' + objeto.idade.value;
    }
    if(isNaN(objeto.dia.value)){
        document.getElementById("stringobjectoutputdia").innerHTML = '<b>Dia de nascimento:</b> ' + objeto.dia.value;
    }
    if(isNaN(objeto.mes.value)){
        document.getElementById("stringobjectoutputmes").innerHTML = '<b>Mes de nascimento:</b> ' + objeto.mes.value;
    }
    if(isNaN(objeto.ano.value)){
        document.getElementById("stringobjectoutputano").innerHTML = '<b>Ano de nascimento:</b> ' + objeto.ano.value;
    }
    if(isNaN(objeto.emprego.value)){
        document.getElementById("stringobjectoutputemprego").innerHTML = '<b>Emprego:</b> ' + objeto.emprego.value;
    }
    if(isNaN(objeto.salario.value)){
        document.getElementById("stringobjectoutputsalario").innerHTML = '<b>Salario:</b> ' + objeto.salario.value;
    }
    
    //limpar o texto caso o usuario mude de string para outra coisa e aperte o botao.
    if(!isNaN(objeto.nome.value)){
        document.getElementById("stringobjectoutputnome").innerHTML = '';
    }
    if(!isNaN(objeto.idade.value)){
        document.getElementById("stringobjectoutputidade").innerHTML = '';
    }
    if(!isNaN(objeto.dia.value)){
        document.getElementById("stringobjectoutputdia").innerHTML = '';
    }
    if(!isNaN(objeto.mes.value)){
        document.getElementById("stringobjectoutputmes").innerHTML = '';
    }
    if(!isNaN(objeto.ano.value)){
        document.getElementById("stringobjectoutputano").innerHTML = '';
    }
    if(!isNaN(objeto.emprego.value)){
        document.getElementById("stringobjectoutputemprego").innerHTML = '';
    }
    if(!isNaN(objeto.salario.value)){
        document.getElementById("stringobjectoutputsalario").innerHTML = '';
    }
}