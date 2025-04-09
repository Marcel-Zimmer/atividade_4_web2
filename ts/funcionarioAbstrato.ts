import {IEmpregado} from "./interfaceEmpregado";

export abstract class Funcionario implements IEmpregado{
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
