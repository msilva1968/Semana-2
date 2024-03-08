const categorias = JSON.parse(localStorage.getItem("tbcategorias")) || [];
const Grava = {
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(categorias);
        gruposTransacoes.push({
            categorias: []
        });
        for (let transacao of listaTransacoes) {
            gruposTransacoes.at(-1).categorias.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        categorias.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tbcategorias", JSON.stringify(categorias));
    }
};
export default Grava;
