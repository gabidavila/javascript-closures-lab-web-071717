function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter += 1;
    return counter;
  }

  function getBumps() {
    return counter;
  }

  return {addBump, getBumps}
}

function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }
}

let sharkCreator = createAnimal("Shark")
let sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
let sharkWithFrickinCannon = sharkCreator("Cannon")
