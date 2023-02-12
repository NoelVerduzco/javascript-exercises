const findTheOldest = function(people) {
    for (let person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }

    const oldest = people.sort((a,b) => {
        const prevPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return prevPerson > nextPerson ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

