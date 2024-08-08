const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript",
};

delete person.hobby; // Delete person Hobby

console.log(person);
/// firstName: 'Matilda', age: 27, goal: 'learning JavaScript'