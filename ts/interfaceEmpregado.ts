export interface IEmpregado{
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