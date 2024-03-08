import Grava from "../types/GravaCategoria.js";
import Listar from "./listacategorias.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }
        const inputCategoria = elementoFormulario.querySelector("#categoria");
        let categoria = inputCategoria.value;
        const novaTransacao = {
            categoria: categoria,
        };
        Grava.registrarTransacao(novaTransacao);
        Listar.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
