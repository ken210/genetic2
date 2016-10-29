// import Gene from './gene';
// import Cromossome from './cromossome';
import Individual from './individual';
import Population from './population';

let populationSize: number = 5;
let individuals: Array<Individual> = [];

while (populationSize--) {
  individuals.push(new Individual());
}

const population = new Population(individuals);

console.log(JSON.stringify(population, null, 2));
