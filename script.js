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
    console.log("Foi executado")
   receberData()
}

function receberData(){
    let nome = document.getElementById("nome").value.trim();
    let anoNasc = document.getElementById("ano-nascimento").value
    let mesNasc = document.getElementById("mes-nascimento").value
    let diaNasc = document.getElementById("ano-nascimento").value

    let dataNasc = {
        nome: nome,
        ano: anoNasc,
        mes: mesNasc,
        dia: diaNasc
    }
    console.log(dataNasc)
    return dataNasc
}

function faixaEtaria(){
    let dataAtual = new date();
    let anoAtual = dataAtual.getYear();
   



}