"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(matricula, nome, setor, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.setor = setor;
        this.cargo = "";
        this.salario = salario;
    }
    Funcionario.prototype.getMatricula = function () {
        return this.matricula;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setSetor = function (setor) {
        this.setor = setor;
    };
    Funcionario.prototype.getSetor = function () {
        return this.setor;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    Funcionario.prototype.getcargo = function () {
        return this.cargo;
    };
    Funcionario.prototype.setcargo = function (cargo) {
        this.cargo = cargo;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
