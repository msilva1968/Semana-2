import Conta from "../types/GravaCategoria.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.categorias) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                        <span class="tipo"><strong>Categoria:</strong> ${transacao.categoria}<BR><BR>
                        </span>
                </div>
            `;
        }
        htmlRegistroTransacoes += `
                ${htmlTransacaoItem}
        `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há categorias cadastradas.</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const Listar = {
    atualizar() {
        renderizarExtrato();
    }
};
export default Listar;
