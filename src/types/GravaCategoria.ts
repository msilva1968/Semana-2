import { TransacaoCategoria } from "./TransacaoCategoria.js";
import { GrupoCategoria } from "./GrupoCategoria.js";

const categorias: TransacaoCategoria[] = JSON.parse(localStorage.getItem("tbcategorias")) || [];

const Grava = {

    getGruposTransacoes(): GrupoCategoria[] {
        const gruposTransacoes: GrupoCategoria[] = [];
        const listaTransacoes: TransacaoCategoria[] = structuredClone(categorias);

        gruposTransacoes.push({
            categorias: []
        });

        for (let transacao of listaTransacoes) {
            gruposTransacoes.at(-1).categorias.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: TransacaoCategoria): void {

        categorias.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tbcategorias", JSON.stringify(categorias));
    }
}

export default Grava;