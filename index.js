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
var funcionarios = [];
function mostrarCamposEspecificos(cargo) {
    var campoBonus = document.getElementById('campo-bonus') ? document.getElementById('campo-bonus') : null;
    if (cargo === "diretor" || cargo === "gerente") {
        campoBonus ? campoBonus.style.display = "block" : null;
    }
    else {
        campoBonus ? campoBonus.style.display = "none" : null;
    }
}
function cadastrarFuncionario(event) {
    var _a;
    event.preventDefault();
    var form = event.target;
    var nome = form.nome.value.trim();
    var matriculaStr = form.matricula.value;
    var setor = form.setor.value.trim();
    var cargo = form.cargo.value;
    var salarioStr = form.salario.value;
    var bonusStr = (_a = form.bonus) === null || _a === void 0 ? void 0 : _a.value;
    if (!nome) {
        alert("Por favor, insira o nome.");
        return;
    }
    var matricula = parseInt(matriculaStr, 10);
    if (isNaN(matricula) || matricula <= 0) {
        alert("Por favor, insira uma matrícula válida.");
        return;
    }
    if (!setor) {
        alert("Por favor, insira o setor.");
        return;
    }
    var salarioBase = parseFloat(salarioStr);
    if (isNaN(salarioBase) || salarioBase <= 0) {
        alert("Por favor, insira um salário base válido.");
        return;
    }
    var bonus = parseFloat(bonusStr);
    if (isNaN(bonus))
        bonus = 0;
    var pessoa;
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
    document.getElementById("campo-bonus").style.display = "none";
}
function mostrarFuncionarios() {
    var tabel = document.getElementById('tabela-funcionarios') ? document.getElementById('tabela-funcionarios') : null;
    if (tabel) {
        var tabela = tabel.querySelector('tbody') ? tabel.querySelector('tbody') : null;
        if (tabela) {
            for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
                var pessoa = funcionarios_1[_i];
                var linha = document.createElement('tr');
                linha.innerHTML = "\n                <td>".concat(pessoa.nome, "</td>\n                <td>").concat(pessoa.matricula, "</td>\n                <td>").concat(pessoa.cargo.charAt(0).toUpperCase() + pessoa.cargo.slice(1), "</td>\n                <td>").concat(pessoa.salario, "</td>\n                ");
                tabela.appendChild(linha);
            }
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
