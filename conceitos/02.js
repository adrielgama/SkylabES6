////2º Exercício
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//!2.1
var idades = usuarios.map((users) => users.idade); //* Arrow function, muito utlizado em JS
/*var idades = usuarios.map(function (users) {
    return users.idade;
});*/
console.log(idades);

//!2.2
var filtro = usuarios.filter(
  (work) => work.empresa === "Rocketseat" && work.idade > 18
);
/*var filtro = usuarios.filter(function (work) {
    return work.empresa === 'Rocketseat' && work.idade > 18;
});*/
console.log(filtro);

//!2.3
var trabalho = usuarios.find((userWork) => userWork.empresa === "Google");
console.log(trabalho);

//!2.4
const doubleAge = usuarios.map((usuario) => ({
  nome: usuario.nome,
  idade: usuario.idade * 2,
  empresa: usuario.empresa,
}));

var minor = doubleAge.filter(usuario => usuario.idade <= 50);
console.log(minor);
