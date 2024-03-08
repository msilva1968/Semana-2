import Conta from "../types/GravaLivro.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.livros) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                        <span class="tipo"><strong>Título:</strong> ${transacao.titulo}<BR>
                                           <strong>Autor: </strong>${transacao.autor}<BR>
                                           <strong>Publicação: </strong>${transacao.publicacao}<BR><BR>
                        </span>
                </div>
            `;
        }
        htmlRegistroTransacoes += `
                ${htmlTransacaoItem}
        `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há livros cadastrados.</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ListarLivros = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ListarLivros;
