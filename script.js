//1. Pegar os valores dos inputs -> nome, anoNasc, mesNasc, diaNasc
//2. Fazer calculo de idade -> anoAtual, calcIdade
//3. Gerar a faixa etária -> faixaEtaria
//4. Organizar o objeto pessoa para salvar na lista
//5. Cadastrar a pessoa na lista
//6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
//7. Renderizar o conteúdo da tabela com as pessoas cadastradas
//8. Botão para limpar os registros;


function calcular(event){
    event.preventDefault()
    

    let usuario = receberData();
    let classificacao = dataAtual()
    let calcularIdade = calcIdade(classificacao.anoAtualizado,classificacao.mesAtual,classificacao.diaAtual,usuario.anoNasc,usuario.mesNasc,usuario.diaNasc)
    let faixa = faixaEtaria(calcularIdade)
   console.log(calcularIdade)
   console.log(usuario)
   console.log(faixa) // imprimindo a faixa etaria do usuario
 
}

function receberData(){
    let nome = document.getElementById("nome").value.trim();
    let anoNasc = document.getElementById("ano-nascimento").value
    let mesNasc = document.getElementById("mes-nascimento").value
    let diaNasc = document.getElementById("dia-nascimento").value

    let dataNasc = {
        nome: nome,
        anoNasc: anoNasc,
        mesNasc: mesNasc,
        diaNasc: diaNasc
    }
    console.log(dataNasc)
    return dataNasc
}

function dataAtual(){
    let data = new Date();
    let anoAtual = data.getFullYear();
    let mesAtual = data.getMonth() + 1;
    let diaAtual = data.getDate();

    let dataAtualizado = {
        anoAtualizado: anoAtual,
        mesAtual: mesAtual,
        diaAtual: diaAtual
    }

    console.log(dataAtualizado)
    return dataAtualizado

}
//calcular idade do usuário

function calcIdade(anoAtualizado,mesAtual,diaAtual,anoNasc,mesNasc,diaNasc){
    let idade = anoAtualizado - anoNasc
    let mesIdade = mesAtual - mesNasc

   if(mesIdade < 0 || mesIdade == 0 && diaAtual < diaNasc ){ //caso o mes atual seja menor que o de nascimento, ou seja igual os meses, mas o dia seja menor, a idade recebera a menos
    idade--
   }

    console.log(+idade)

    return idade

}

function faixaEtaria(idade){
    if(idade >= 0 && idade <= 12){

        return "Criança"

    } else if(idade >= 13 && idade <= 13){

        return "Adolescente"

    }else if (idade >= 18 && idade <= 65){

        return "Adulto"

    } else{

        return "Idoso"

    }
}



// function cadastrarUsuario(usuario){ // armazenar no localstorage
//     let listaUsuarios = []
    

//     listaUsuarios.push(usuario) 

//     //Salva a listaUsuarios no localStorage
//     localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
// }

// function carregarUsuario(){
//     let listaCarregada = []
//     if(localStorage.getItem("usuariosCadastrados") != null){
//         listaUsuarios = JSON.parse(localStorage.getItem("usuarioCadastrados"))
//     }
    
//     if(listaCarregada.length == 0){
//         //se não tiver nenhum usuario cadastrado, mostrar mensagem
//         let tabela = document.getElementById("corpo-tabela")

//         tabela.innerHTML = "Nenhum usuário cadastrado." //HTML interno
//     }

//     console.log(listaCarregada)
        
// }

// window.addEventListener("DOMContentLoaded",() => carregarUsuario()) //Quando carregar, vai atualizar a lista de usuario