import { TransacaoLivro } from "../types/TransacaoLivro.js";
import Grava from "../types/GravaLivro.js";
import ListarLivros from "./listalivros.js";
import { ValidarISBN } from "./validaISBN.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try 
    {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }

        const inputTitulo = elementoFormulario.querySelector("#titulo") as HTMLInputElement;
        const inputSinopse = elementoFormulario.querySelector("#sinopse") as HTMLInputElement;
        const inputSumario = elementoFormulario.querySelector("#sumario") as HTMLInputElement;
        const inputPreco = elementoFormulario.querySelector("#preco") as HTMLInputElement;
        const inputPaginas = elementoFormulario.querySelector("#paginas") as HTMLInputElement;
        const inputISBN = elementoFormulario.querySelector("#isbn") as HTMLInputElement;
        const inputPublicacao = elementoFormulario.querySelector("#publicacao") as HTMLInputElement;
        const inputCategoria = elementoFormulario.querySelector("#categoria") as HTMLInputElement;
        const inputAutor = elementoFormulario.querySelector("#autor") as HTMLInputElement;

        let titulo: string = inputTitulo.value;
        let sinopse: string = inputSinopse.value;
        let sumario: string = inputSumario.value;
        let preco: number = parseFloat(inputPreco.value);
        let paginas: number = parseInt(inputPaginas.value);
        let isbn: string = inputISBN.value;
        let publicacao: Date = inputPublicacao.valueAsDate;
        let categoria: string = inputCategoria.value;
        let autor: string = inputAutor.value;
        let dataatual: Date = new Date();

       if(publicacao <= dataatual ){
        alert("A Data de Publicação deve ser maior que a data atual!");
        return;
       }
       
       if (paginas <= 0 ){
        alert("O campo Páginas deve ser maior que zero!");
        return;
       }

       if (sumario.length < 100){
           alert("O campo Sumario deve ter no mínimo 100 caracteres!");
           return;

       }else if ( (sinopse.length > 500)){
           alert("O campo Sinopse deve ter no máximo 500 caracteres!");
           return;
       }

       if (ValidarISBN(isbn)){
        alert("ISBN já cadastrado!");
        return;
       }

        const novaTransacao: TransacaoLivro = {
            titulo: titulo,
            sinopse: sinopse,
            sumario: sumario,
            preco: preco,
            paginas: paginas,
            isbn: isbn,
            publicacao: publicacao,
            categoria: categoria,
            autor: autor
        }

        Grava.registrarTransacao(novaTransacao);
        ListarLivros.atualizar();
        elementoFormulario.reset();
    }
    catch(erro) {
        alert(erro.message);
    }
});