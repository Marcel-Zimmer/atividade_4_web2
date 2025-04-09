import { Gerente } from "../ts/classes/Gerente.js"
import { Auxiliar } from "../ts/classes/Auxilixar.js"
import { Diretor } from '../ts/classes/Diretor.js';
import { Funcionario } from "../ts/funcionarioAbstrato.js"

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
    console.log(nome,setor,matricula, cargo)
    const salarioBase = parseFloat(form.salario.value);
    const bonus = parseFloat(form.bonus.value) || 0;
    let pessoa : Funcionario 
    if(cargo === "diretor"){
        pessoa = new Diretor(matricula,nome,setor, salarioBase)
        let novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
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