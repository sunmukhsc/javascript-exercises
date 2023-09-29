const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (oldest===undefined) {
            return person;
        } 

        const currentYear = (new Date()).getFullYear();
        let oldestAge;
        let personAge;

        if (!(oldest.hasOwnProperty("yearOfDeath"))) {
            oldestAge = currentYear - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (!(person.hasOwnProperty("yearOfDeath"))) {
            personAge = currentYear - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (personAge > oldestAge) {
            return person;
        }else {return oldest;}

    });
};

// Do not edit below this line
module.exports = findTheOldest;
