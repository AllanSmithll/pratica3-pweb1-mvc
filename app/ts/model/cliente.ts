class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
