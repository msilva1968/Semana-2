const transacoes = JSON.parse(localStorage.getItem("tblivros")) || [];
const Grava = {
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        gruposTransacoes.push({
            livros: []
        });
        for (let transacao of listaTransacoes) {
            gruposTransacoes.at(-1).livros.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("tblivros", JSON.stringify(transacoes));
    }
};
export default Grava;
