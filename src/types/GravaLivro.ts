import { TransacaoLivro } from "./TransacaoLivro.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

const transacoes: TransacaoLivro[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }

    return value;
}) || [];

const Grava = {

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: TransacaoLivro[] = structuredClone(transacoes);
        const transacoesOrdenadas: TransacaoLivro[] = listaTransacoes.sort((t1, t2) => t2.publicacao.getTime() - t1.publicacao.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.publicacao.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: TransacaoLivro): void {

        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Grava;