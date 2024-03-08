import Conta from "../types/GravaCategoria.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoCategoria } from "../types/GrupoCategoria.js";
import { formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoCategoria[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes)
    {
        let htmlTransacaoItem: string = "";
        for (let transacao of grupoTransacao.categorias)
        {
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
    atualizar(): void {
        renderizarExtrato();
    }
}
export default Listar;