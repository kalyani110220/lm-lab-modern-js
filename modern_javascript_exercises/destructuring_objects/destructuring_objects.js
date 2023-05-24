// Instructions can be found in destructuring_objects.md

export function introduction(person) {
  const name = person.name;
  const city = person.city;
  const pet = person.pet;

  // return "Hello my name is " + name + " and I live in " + city + " with " + pet;
  const greetings = [];
persons.forEach(person => {
  const greeting = `Hello my name is, ${person.name} and I live in ${person.city} with${person.pet}.`;
  greetings.push(greeting);
});
console.log(greetings);
}
