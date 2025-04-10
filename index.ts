var funcionarios : Funcionario[] = []

function mostrarCamposEspecificos(cargo:string){
    let campoBonus = document.getElementById('campo-bonus') ? document.getElementById('campo-bonus')  : null;
    if(cargo ==="diretor"|| cargo ==="gerente"){
        campoBonus? campoBonus.style.display = "block" : null;
    }
    else {
        campoBonus? campoBonus.style.display = "none" : null;
    }
}

function cadastrarFuncionario(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const nome = form.nome.value.trim();
    const matriculaStr = form.matricula.value;
    const setor = form.setor.value.trim();
    const cargo = form.cargo.value;
    const salarioStr = form.salario.value;
    const bonusStr = form.bonus?.value;

    if (!nome) {
        alert("Por favor, insira o nome.");
        return;
    }

    const matricula = parseInt(matriculaStr, 10);
    if (isNaN(matricula) || matricula <= 0) {
        alert("Por favor, insira uma matrícula válida.");
        return;
    }

    if (!setor) {
        alert("Por favor, insira o setor.");
        return;
    }

    const salarioBase = parseFloat(salarioStr);
    if (isNaN(salarioBase) || salarioBase <= 0) {
        alert("Por favor, insira um salário base válido.");
        return;
    }

    let bonus = parseFloat(bonusStr);
    if (isNaN(bonus)) bonus = 0;

    let pessoa: Funcionario;

    switch (cargo) {
        case "diretor":
            pessoa = new Diretor(matricula, nome, setor, salarioBase);
            pessoa.setSalario(salarioBase + bonus);
            break;
        case "gerente":
            pessoa = new Gerente(matricula, nome, setor, salarioBase);
            pessoa.setSalario(salarioBase + bonus);
            break;
        case "auxiliar":
            pessoa = new Auxiliar(matricula, nome, setor, salarioBase);
            break;
        default:
            alert("Cargo inválido.");
            return;
    }

    funcionarios.push(pessoa);
    alert("Funcionário cadastrado com sucesso!");
    form.reset();
    document.getElementById("campo-bonus")!.style.display = "none";
}

function mostrarFuncionarios(){
    const tabel = document.getElementById('tabela-funcionarios') ? document.getElementById('tabela-funcionarios') : null;
    if(tabel){    
        const tabela = tabel.querySelector('tbody') ? tabel.querySelector('tbody') : null;
        if(tabela){
            for(let pessoa of funcionarios){
                const linha = document.createElement('tr');
                linha.innerHTML = `
                <td>${pessoa.nome}</td>
                <td>${pessoa.matricula}</td>
                <td>${pessoa.cargo.charAt(0).toUpperCase() + pessoa.cargo.slice(1)}</td>
                <td>${pessoa.salario}</td>
                `;
            
                tabela.appendChild(linha);
            }
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