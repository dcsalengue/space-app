var fotos =
[
  {
    "titulo": "Grande Nuvem de Magalhães",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-1.png",
    "id": "1",
    "tagId": 2
  },
  {
    "titulo": "Via Láctea",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-2.png",
    "id": "2",
    "tagId": 2
  },
  {
    "titulo": "Lua: quarto minguante",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-3.png",
    "id": "3",
    "tagId": 3
  },
  {
    "titulo": "Galáxia de Andrómeda",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-4.png",
    "id": "4",
    "tagId": 2
  },
  {
    "titulo": "Estrela Pistola",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-5.png",
    "id": "5",
    "tagId": 1
  },
  {
    "titulo": "Ilustração",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-6.png",
    "id": "6",
    "tagId": 4
  },
  {
    "titulo": "Galáxia de Andrómeda",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-7.png",
    "id": "7",
    "tagId": 2
  },
  {
    "titulo": "Ilustração",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-8.png",
    "id": "8",
    "tagId": 4
  },
  {
    "titulo": "Céu estrelado",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-9.png",
    "id": "9",
    "tagId": 1
  },
  {
    "titulo": "Ilustração",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-10.png",
    "id": "10",
    "tagId": 1
  }
]

var meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str] = "valor de String";
meuObj[aleat] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);


function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}

console.log( mostrarProps(meuObj, "obj"));


function listarTodasAsPropriedades(o) {
  var objectoASerInspecionado;
  var resultado = [];

  for (
    objectoASerInspecionado = o;
    objectoASerInspecionado !== null;
    objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectoASerInspecionado),
    );
  }

  return resultado;
}

console.log( listarTodasAsPropriedades(meuObj));

console.log( mostrarProps(fotos, "fotos"));

console.log( listarTodasAsPropriedades(fotos));

function mostreCarro() {
  var resultado =
    "Um belo " + " " + this.marca + " " + this.modelo + " " + this.ano;
  console.log(resultado);
}

function Carro(marca, modelo, ano, dono) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
  this.mostreCarro = mostreCarro;
}



function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}

var jose = new Pessoa("Jose Silva", 33, "M");
var paulo = new Pessoa("Paulo Santos", 39, "M");

var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);




console.log( mostrarProps(carro1, "carro1"));
console.log( mostrarProps(carro2, "carro2"));

// Encapsulamento das propriedades e métodos de Animal
var Animal = {
  tipo: "Invertebrados", // Propriedades de valores padrão
  qualTipo: function () {
    // Método que ira mostrar o tipo de Animal
    console.log(this.tipo);
  },
};

// Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo(); // Saída:Invertebrados

// Cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); // Saída: Peixes

carro1.mostreCarro();
carro2.mostreCarro();