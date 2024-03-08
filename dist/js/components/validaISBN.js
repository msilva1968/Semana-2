import Grava from "../types/GravaLivro.js";
export function ValidarISBN(valor) {
    const gruposTransacoes = Grava.getGruposTransacoes();
    let isbn = valor;
    for (let grupoTransacao of gruposTransacoes) {
        for (let transacao of grupoTransacao.livros) {
            if (isbn === transacao.isbn) {
                return true;
            }
        }
    }
    return false;
}
