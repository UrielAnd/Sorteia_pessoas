//Seleciona as tags informadas presentes no documento html//
const btn_sortear = document.querySelector(".button_sortear");   //O document acessa o documento html linkado ao js e o querySelector seleciona a class informada nos ().//
const textarea = document.querySelector("textarea");
const Tag_resultado       = document.querySelector(".resultado p")
const popUpResultado     = document.querySelector(".resultado")
const btnFechar          = document.querySelector(".fechar")

function Pegar_dados_formulario(){
    //TODO INPUT TEM UMA PROPRIEDADE DE VALUE QUE FICA ARMAZENADA//
    const Valor_campo = textarea.value;     //Captura o valor do textarea e passa para o Valor_campo//
    const Lista_nomes = Valor_campo.split(",");     //Transforma a string do Valor_campo em uma array, atravez do split(","), que separa os nomes por meio da função split e atravez da virgula//
    const tamanho_array = Lista_nomes.length;
    const Posicao_nome = Get_numero_aleatorio(tamanho_array);
    const nome = Lista_nomes[Posicao_nome];
    Mostrar_resultado(nome)

    textarea.value = "";
}
//Pega o elemento que deseja e adiciona uma forma de evento//
btn_sortear.addEventListener("click", Pegar_dados_formulario);

function Get_numero_aleatorio(tamanho_array){
    //Gera e retorna um número aleatorio para quem chama//
    return Math.floor(Math.random() * (tamanho_array - 0) + 0);
}
function Mostrar_resultado(nome){

    Tag_resultado.innerText = `Resultado: ${nome}`;
    popUpResultado.classList.add("mostrarResultado");
    
}


function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado");

}
btnFechar.addEventListener("click", fecharPopUp);