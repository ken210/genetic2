import Gene from './gene';
import { randomBool } from './random';

export function pairsFactory(cromossomeSize, baseCharCode): Array<Gene> {
  return Array(cromossomeSize).fill(1).map((v, index) => {
    const baseChar = String.fromCharCode(baseCharCode + index);
    const firstChar = randomBool();
    const lastChar = randomBool();
    return new Gene(baseChar, firstChar, lastChar);
  });
}

export default class Cromossome {
  pairs: Array<Gene>;
  constructor(
    motherCromossome: Array<Gene>,
    fatherCromossome: Array<Gene>
  ) {
    this.pairs = this.generate(motherCromossome, fatherCromossome);
  }

  private generate(
    motherCromossome: Array<Gene>,
    fatherCromossome: Array<Gene>
  ): Array<Gene> {
    return motherCromossome.map((motherGene: Gene, index) => {
      const rand = randomBool();
      const fatherGene = fatherCromossome[index];
      const baseChar = motherGene.baseChar;
      const firstChar = (rand ? motherGene : fatherGene).firstChar;
      const lastChar = (!rand ? motherGene : fatherGene).lastChar;
      return new Gene(baseChar, firstChar, lastChar);
    });
  }
}
