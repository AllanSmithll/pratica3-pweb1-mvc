class Cliente {
    constructor(nome, cpf) {
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
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
