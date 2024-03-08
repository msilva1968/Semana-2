import Conta from "../types/GravaLivro.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                        <span class="tipo"><strong>Título:</strong> ${transacao.titulo}<BR>
                                           <strong>Autor: </strong>${transacao.autor}<BR>
                                           <strong>Publicação: </strong>${formatarData(transacao.publicacao, FormatoData.PADRAO)}<BR><BR>
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
