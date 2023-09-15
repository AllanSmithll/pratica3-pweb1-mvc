class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private _clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this._clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        this._clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
