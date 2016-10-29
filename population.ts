import Individual from './individual';

export default class Population {
  individuals: Array<Individual>;

  constructor(individuals: Array<Individual>) {
    this.individuals = individuals;
  }

  get length () {
    return this.individuals.length;
  }
}