export class Pokemon {
  name: string;
  id: number;
  type1: PokeType;
  type2: PokeType;
  img_url: string;
  evolves_to: number;
  evolves_from: number;

  constructor(
    name: string,
    id: number,
    type1: PokeType,
    type2: PokeType,
    img_url: string,
    evolves_to: number,
    evolves_from: number
  ) {
    this.name = name;
    this.id = id;
    this.type1 = type1;
    this.type2 = type2;
    this.img_url = img_url;
    this.evolves_to = evolves_to;
    this.evolves_from = evolves_from;
  }
}

export enum PokeType {
  Acier = 'ACIER',
  Combat = 'COMBAT',
  Dragon = 'DRAGON',
  Eau = 'EAU',
  Electrik = 'ELECTRIK',
  Fee = 'FEE',
  Feu = 'FEU',
  Glace = 'GLACE',
  Insecte = 'INSECTE',
  Normal = 'NORMAL',
  Plante = 'PLANTE',
  Poison = 'POISON',
  Psy = 'PSY',
  Roche = 'ROCHE',
  Sol = 'SOL',
  Spectre = 'SPECTRE',
  Tenebres = 'TENEBRES',
  Vol = 'VOL',
}
