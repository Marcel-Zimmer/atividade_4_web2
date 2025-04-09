
function mostrarCamposEspecificos(cargo:string){
    let cargoDiretor = document.getElementById('campo-diretor') ? document.getElementById('campo-diretor')  : null;
    let cargoGerente = document.getElementById('campo-gerente') ? document.getElementById('campo-gerente')  : null ;
    if(cargo ==="diretor"){
        cargoDiretor? cargoDiretor.style.display = "block" : null;
        cargoGerente? cargoGerente.style.display = "none" : null;
    }
    else if(cargo ==="gerente"){
        cargoDiretor? cargoDiretor.style.display = "none" : null;
        cargoGerente? cargoGerente.style.display = "block" : null;
    }
    else {
        cargoDiretor? cargoDiretor.style.display = "none" : null;
        cargoGerente? cargoGerente.style.display = "none" : null;
    }
}

function cadastrarFuncionario(event) {
    event.preventDefault();
    const form = event.target;
    const nome = form.nome.value;
    const setor = form.setor.value;
    const matricula = form.matricula.value;
    const cargo = form.cargo.value;
    const salarioBase = parseFloat(form.salario.value);
    const bonus = parseFloat(form.bonus.value) || 0;
    console.log(nome,setor,matricula, cargo, salarioBase, bonus)
    console.log(form)
    let pessoa : Funcionario 
    if(cargo === "diretor"){
        pessoa = new Diretor(matricula,nome,setor, salarioBase)
        let novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
        console.log(novoSalario)

    }
    else if(cargo === "gerente"){
        pessoa = new Gerente(matricula,nome,setor, salarioBase)
        let novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
    }
    else{
        pessoa = new Auxiliar(matricula,nome,setor, salarioBase)
    }

    const tabel = document.getElementById('tabela-funcionarios') ? document.getElementById('tabela-funcionarios') : null;
    if(tabel){    
        const tabela = tabel.querySelector('tbody') ? tabel.querySelector('tbody') : null;
        if(tabela){
            const linha = document.createElement('tr');
            linha.innerHTML = `
              <td>${pessoa.nome}</td>
              <td>${pessoa.matricula}</td>
              <td>${pessoa.cargo.charAt(0).toUpperCase() + pessoa.cargo.slice(1)}</td>
              <td>${pessoa.salario.toFixed(2)}</td>
            `;
        
            tabela.appendChild(linha);
            form.reset();
        }
    }

}
interface IEmpregado{
    readonly matricula : number; 
    nome : string;
    setor : string;
    cargo:string ;
    salario : number;

    getMatricula() : number;
    setNome(nome : string) : void;
    getNome() : string;
    setSetor(setor : string) : void ;
    getSetor() : string; 
    getSalario() : number
    setSalario(salario:number):void 
    getcargo() : string
    setcargo(cargo:string):void
    
}

abstract class Funcionario implements IEmpregado{
    readonly matricula: number;
    nome: string;
    setor: string ;
    cargo : string;
    salario : number;

    constructor(matricula:number, nome: string, setor: string, salario : number){
        this.matricula = matricula;
        this.nome = nome;
        this.setor = setor; 
        this.cargo = ""
        this.salario = salario;
    }

    getMatricula(): number {
        return this.matricula;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    getNome(): string {
        return this.nome;
    }
    setSetor(setor: string): void {
        this.setor = setor;
    }
    getSetor(): string {
        return this.setor;
    }
    getSalario() : number{
        return this.salario
    }
    
    setSalario(salario:number):void {
        this.salario = salario;
    }

    getcargo() : string{
        return this.cargo;
    }
    
    setcargo(cargo:string):void {
        this.cargo = cargo;
    }
    

}
class Auxiliar extends Funcionario{
    cargo = "auxiliar";
}
class Diretor extends Funcionario{
    cargo = "diretor";    
}
class Gerente extends Funcionario{
    cargo = "gerente"
}