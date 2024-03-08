import Grava from "../types/GravaLivro.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";

export function ValidarISBN(valor: string){

    const gruposTransacoes: GrupoTransacao[] = Grava.getGruposTransacoes();

    let isbn: string = valor;

    for (let grupoTransacao of gruposTransacoes)
    {
        for (let transacao of grupoTransacao.transacoes)
        {
           if (isbn === transacao.isbn){
             return true;
           }
        }
    }

    return false;
}