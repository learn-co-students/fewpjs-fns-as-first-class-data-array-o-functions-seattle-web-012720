function wakeDog(dog_name, dog_breed) {
    console.log(`Wake ${dog_name} the ${dog_breed}`);
    return (`Wake ${dog_name} the ${dog_breed}`);
}

function leashDog(dog_name, dog_breed) {
    let statement = `Leash ${dog_name} the ${dog_breed}`
    console.log(statement);
    return statement 
}

function walkToPark(dog_name, dog_breed) {
    let statement = `Walk to the park with ${dog_name} the ${dog_breed}`
    console.log(statement);
    return statement 
}

function throwFrisbee(dog_name, dog_breed) {
    let statement = `Throw the frisbee for ${dog_name} the ${dog_breed}`
    console.log(statement);
    return statement 
}

function walkHome(dog_name, dog_breed) {
    let statement = `Walk home with ${dog_name} the ${dog_breed}`
    console.log(statement);
    return statement 
}

function unleashDog(dog_name, dog_breed) {
    let statement =`Unleash ${dog_name} the ${dog_breed}`
    console.log(`Unleash ${dog_name} the ${dog_breed}`);
    return statement;
};


const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dog_name, dog_breed) {
    return routine.map(fn => fn(dog_name, dog_breed))
      }
    