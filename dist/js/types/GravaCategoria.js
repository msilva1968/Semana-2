const categorias = JSON.parse(localStorage.getItem("categoria"), (key, value) => {
    return value;
}) || [];
const Grava = {
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(categorias);
        let labelAtualGrupoTransacao = "";
        for (let transacao of listaTransacoes) {
            let labelGrupoTransacao = "A";
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
    registrarTransacao(novaTransacao) {
        categorias.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(categorias));
    }
};
export default Grava;
