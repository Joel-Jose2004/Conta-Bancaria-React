export interface Conta {
    some(arg0: (index: Conta) => boolean): unknown;
    find: any;
    map(arg0: (index: Conta) => boolean): unknown;
    nome: string;
    saldo: number;
    numeroConta: number;
}