import { TransacaoCategoria } from "./TransacaoCategoria.js";
import { GrupoCategoria } from "./GrupoCategoria.js";

const categorias: TransacaoCategoria[] = JSON.parse(localStorage.getItem("categoria"), (key: string, value: string) => {

    return value;
}) || [];

const Grava = {

    getGruposTransacoes(): GrupoCategoria[] {
        const gruposTransacoes: GrupoCategoria[] = [];
        const listaTransacoes: TransacaoCategoria[] = structuredClone(categorias);
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of listaTransacoes) {
            let labelGrupoTransacao: string = "A";
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    categorias: []
                });
            }
            gruposTransacoes.at(-1).categorias.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: TransacaoCategoria): void {

        categorias.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(categorias));
    }
}

export default Grava;