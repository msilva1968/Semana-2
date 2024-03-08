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
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of listaTransacoes) {
            let labelGrupoTransacao: string = "A";
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