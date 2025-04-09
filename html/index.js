var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var salarioBase = parseFloat(form.salario.value);
    var bonus = parseFloat(form.bonus.value) || 0;
    console.log(nome, setor, matricula, cargo, salarioBase, bonus);
    console.log(form);
    var pessoa;
    if (cargo === "diretor") {
        pessoa = new Diretor(matricula, nome, setor, salarioBase);
        var novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
        console.log(novoSalario);
    }
    else if (cargo === "gerente") {
        pessoa = new Gerente(matricula, nome, setor, salarioBase);
        var novoSalario = salarioBase + bonus;
        pessoa.setSalario(novoSalario);
    }
    else {
        pessoa = new Auxiliar(matricula, nome, setor, salarioBase);
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
var Auxiliar = /** @class */ (function (_super) {
    __extends(Auxiliar, _super);
    function Auxiliar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cargo = "auxiliar";
        return _this;
    }
    return Auxiliar;
}(Funcionario));
var Diretor = /** @class */ (function (_super) {
    __extends(Diretor, _super);
    function Diretor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cargo = "diretor";
        return _this;
    }
    return Diretor;
}(Funcionario));
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cargo = "gerente";
        return _this;
    }
    return Gerente;
}(Funcionario));
