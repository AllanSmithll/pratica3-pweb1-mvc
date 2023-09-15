class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf)
        this._dependentes = new Array<Cliente>();
    }

    get dependentes(): Array<Cliente> {
        return this._dependentes;
    }
}
