"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gerente_js_1 = require("../ts/classes/Gerente.js");
var Auxilixar_js_1 = require("../ts/classes/Auxilixar.js");
var Diretor_js_1 = require("../ts/classes/Diretor.js");
function mostrarCamposEspecificos(cargo) {
    var cargoDiretor = document.getElementById('campo-diretor') ? document.getElementById('campo-diretor') : null;
    var cargoGerente = document.getElementById('campo-gerente') ? document.getElementById('campo-gerente') : null;
    if (cargo === "diretor") {
        cargoDiretor ? cargoDiretor.style.display = "block" : null;
        cargoGerente ? cargoGerente.style.display = "none" : null;
    }
    else if (cargo === "gerente") {
        cargoDiretor ? cargoDiretor.style.display = "none" : null;
        cargoGerente ? cargoGerente.style.display = "block" : null;
    }
    else {
        cargoDiretor ? cargoDiretor.style.display = "none" : null;
        cargoGerente ? cargoGerente.style.display = "none" : null;
    }
}
function cadastrarFuncionario(event) {
    event.preventDefault();
    var form = event.target;
    var nome = form.nome.value;
    var setor = form.setor.value;
    var matricula = form.matricula.value;
    var cargo = form.cargo.value;
    console.log(nome, setor, matricula, cargo);
    var salarioBase = parseFloat(form.salario.value);
    var bonus = parseFloat(form.bonus.value) || 0;
    var pessoa;
    if (cargo === "diretor") {
        pessoa = new Diretor_js_1.Diretor(matricula, nome, setor, salarioBase);
        var novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
    }
    else if (cargo === "gerente") {
        pessoa = new Gerente_js_1.Gerente(matricula, nome, setor, salarioBase);
        var novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
    }
    else {
        pessoa = new Auxilixar_js_1.Auxiliar(matricula, nome, setor, salarioBase);
    }
    var tabel = document.getElementById('tabela-funcionarios') ? document.getElementById('tabela-funcionarios') : null;
    if (tabel) {
        var tabela = tabel.querySelector('tbody') ? tabel.querySelector('tbody') : null;
        if (tabela) {
            var linha = document.createElement('tr');
            linha.innerHTML = "\n              <td>".concat(pessoa.nome, "</td>\n              <td>").concat(pessoa.matricula, "</td>\n              <td>").concat(pessoa.cargo.charAt(0).toUpperCase() + pessoa.cargo.slice(1), "</td>\n              <td>").concat(pessoa.salario.toFixed(2), "</td>\n            ");
            tabela.appendChild(linha);
            form.reset();
        }
    }
}
