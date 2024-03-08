import { TransacaoLivro } from "./TransacaoLivro.js";

export type GrupoTransacao = {
    label: string;
    transacoes: TransacaoLivro[];
}