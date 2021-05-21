var people = [
  { nome: 'Jorge', idade: 25, salario: 2000 },
  { nome: 'André', idade: 55, salario: 6200 },
  { nome: 'Marcos', idade: 19, salario: 1500 },
  { nome: 'Adalberto', idade: 35, salario: 3200 },
  { nome: 'Carlos', idade: 37, salario: 1900 },
];

const ageBiggerThan35 = () => {
  return people.filter((person) => person.idade > 35);
};

const sumAllSalaries = () => {
  return people.reduce((total, person) => {
    return total + person.salario;
  }, 0);
};

const findByName = (name) => {
  return (
    people.find((person) => person.nome === name) ||
    `Nome: ${name}, não encontrado!`
  );
};

const nameStartWithA = () => {
  return people.filter((person) => person.nome[0].toUpperCase() === 'A');
};

console.log(findByName('José'));
console.log(ageBiggerThan35());
console.log(sumAllSalaries());
console.log(nameStartWithA());
