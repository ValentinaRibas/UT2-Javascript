function findTheOldest(people) {
    const oldestPerson = people.reduce((oldestPerson, actual) => {
        const actualAge = (actual.yearOfDeath || new Date().getFullYear()) - actual.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;

        return actualAge > oldestAge ? actual : oldestPerson;
    });

    console.log(oldestPerson);
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Mary",
        yearOfBirth: 1950,
        yearOfDeath: 2020,
    }
];

findTheOldest(people); 