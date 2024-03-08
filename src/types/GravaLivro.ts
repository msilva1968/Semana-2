import { TransacaoLivro } from "./TransacaoLivro.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

const transacoes: TransacaoLivro[] = JSON.parse(localStorage.getItem("tblivros")) || [];

const Grava = {

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: TransacaoLivro[] = structuredClone(transacoes);

        gruposTransacoes.push({
            livros: []
        });

        for (let transacao of listaTransacoes) {
            gruposTransacoes.at(-1).livros.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: TransacaoLivro): void {

        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tblivros", JSON.stringify(transacoes));
    }
}

export default Grava;