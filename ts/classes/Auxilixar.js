"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auxiliar = void 0;
var Auxiliar = /** @class */ (function () {
    function Auxiliar(name, matricula, setor, salario) {
        this.cargo = "auxiliar";
        this.name = "";
        this.matricula = 0;
        this.salario = 0;
        this.setor = "";
        this.name = name;
        this.matricula = matricula;
        this.setor = setor;
        this.salario = salario;
    }
    Auxiliar.prototype.teste = function () {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    };
    return Auxiliar;
}());
exports.Auxiliar = Auxiliar;
