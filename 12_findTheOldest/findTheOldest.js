const findTheOldest = function(people) {
  const oldest = people
      .sort((a, b) => {
        console.log(`a.death: ${a.yearOfDeath} b.death: ${b.yearOfDeath}`)
        const aAge = a.yearOfDeath 
            ? a.yearOfDeath - a.yearOfBirth 
            : new Date().getFullYear() - a.yearOfBirth
        const bAge = b.yearOfDeath 
            ? b.yearOfDeath - b.yearOfBirth 
            : new Date().getFullYear() - b.yearOfBirth
        return bAge - aAge
      })

  // sorted so oldest age is first
  return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
