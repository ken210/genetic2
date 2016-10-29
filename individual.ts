import Gene from './gene';
import Cromossome, { pairsFactory } from './cromossome';
import { BASE_CHAR_CODE, CROMOSSOME_SIZE } from './constants';
import { randomBool } from './random';

export default class Individual {
  cromossome: Cromossome;
  mother?: Individual;
  father?: Individual;

  // female = true, male = false
  // not using it yet thoght
  // maybe will become a class
  // person.sex.reproduce(): Cromossome
  // person.sex.type = 'M|F'
  // person.sex.reproduceTimeout = M ? 1 F : 40
  sex: boolean;

  constructor(mother?: Individual, father?: Individual) {
    this.createSex();

    if (mother && father) {
      this.mother = mother;
      this.father = father;
      this.cromossome = new Cromossome(
        mother.cromossome.pairs, father.cromossome.pairs
      );
    } else {
      // create random person
      this.cromossome = new Cromossome(
        pairsFactory(CROMOSSOME_SIZE, BASE_CHAR_CODE),
        pairsFactory(CROMOSSOME_SIZE, BASE_CHAR_CODE)
      );
    }
  }

  private createSex(): void {
    // random sex for now
    this.sex = randomBool();
  }

  // lol
  private getCromoSum(): number {
    return this.cromossome.pairs.reduce(
      (acc: number, gene: Gene): number => acc + gene.getValue(), 0
    );
  }

  getValue(): number {
    return this.getCromoSum();
  }
}
