// Contas
let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();
clienteController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
// Clientes
// let cliente
const clientesRepositorio = new Clientes();
const cli1 = new Cliente("Allan", "123");
const cli2 = new Cliente("Anderson", "456");
const cli3 = new Cliente("Pedro", "789");
clientesRepositorio.inserir(cli1);
clientesRepositorio.inserir(cli2);
clientesRepositorio.inserir(cli3);
console.log(clientesRepositorio.listar());
clientesRepositorio.remover(cli2.cpf);
console.log(clientesRepositorio.listar());
clientesRepositorio.pesquisar(cli1.cpf);
console.log(clientesRepositorio.listar());
