import { TransacaoCategoria } from "../types/TransacaoCategoria.js";
import Grava from "../types/GravaCategoria.js";
import Listar from "./listacategorias.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try 
    {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }

        const inputCategoria = elementoFormulario.querySelector("#categoria") as HTMLInputElement;

        let categoria: string = inputCategoria.value;


        const novaTransacao: TransacaoCategoria = {
            categoria: categoria,
        }

        Grava.registrarTransacao(novaTransacao);
        Listar.atualizar();
        elementoFormulario.reset();
    }
    catch(erro) {
        alert(erro.message);
    }
});