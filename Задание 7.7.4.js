function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    name: 'Ivan',
    gae: 30
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("Alex Lopik");

console.log(person.fillName);
