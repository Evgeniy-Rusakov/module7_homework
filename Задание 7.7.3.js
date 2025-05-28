const users = [
  { name: 'Alex', age: 13 },
  { name: 'Kris', age: 19 },
  { name: 'Andry', age: 31 },
  { name: 'Sveta', age: 28 },
];

const abults = users.filter(user => user.age >= 18);

const names = abults.map( user => user.name );

console.log(abults);
console.log(names);
