export enum PokemonType {
  NORMAL = "Normal",
  FIGHTING = "Fighting",
  FLYING = "Flying",
  POISON = "Poison",
  GROUND = "Ground",
  ROCK = "Rock",
  BUG = "Bug",
  GHOST = "Ghost",
  STEEL = "Steel",
  FIRE = "Fire",
  WATER = "Water",
  GRASS = "Grass",
  ELECTRIC = "Electric",
  PSYCHIC = "Psychic",
  ICE = "Ice",
  DRAGON = "Dragon",
  DARK = "Dark",
  FAIRY = "Fairy",
}

interface PokemonTypeDetails {
  offensive: {
    superEffective: Array<PokemonType>;
    notVeryEffective: Array<PokemonType>;
    noEffectTo: Array<PokemonType>;
  };
  defensive: {
    resistantTo: Array<PokemonType>;
    weakTo: Array<PokemonType>;
    immuneTo: Array<PokemonType>;
  };
}

export const POKEMON_TYPE_RELATIONSHIPS: Record<
  PokemonType,
  PokemonTypeDetails
> = {
  [PokemonType.NORMAL]: {
    offensive: {
      superEffective: [],
      notVeryEffective: [PokemonType.ROCK, PokemonType.STEEL],
      noEffectTo: [PokemonType.GHOST],
    },
    defensive: {
      resistantTo: [],
      weakTo: [PokemonType.FIGHTING],
      immuneTo: [PokemonType.GHOST],
    },
  },
  [PokemonType.FIGHTING]: {
    offensive: {
      superEffective: [
        PokemonType.NORMAL,
        PokemonType.ICE,
        PokemonType.ROCK,
        PokemonType.DARK,
        PokemonType.STEEL,
      ],
      notVeryEffective: [
        PokemonType.FLYING,
        PokemonType.POISON,
        PokemonType.BUG,
        PokemonType.PSYCHIC,
        PokemonType.FAIRY,
      ],
      noEffectTo: [PokemonType.GHOST],
    },
    defensive: {
      resistantTo: [PokemonType.BUG, PokemonType.ROCK, PokemonType.DARK],
      weakTo: [PokemonType.FLYING, PokemonType.PSYCHIC, PokemonType.FAIRY],
      immuneTo: [],
    },
  },
  [PokemonType.FLYING]: {
    offensive: {
      superEffective: [
        PokemonType.GRASS,
        PokemonType.BUG,
        PokemonType.FIGHTING,
      ],
      notVeryEffective: [
        PokemonType.ROCK,
        PokemonType.STEEL,
        PokemonType.ELECTRIC,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [PokemonType.GRASS, PokemonType.BUG, PokemonType.FIGHTING],
      weakTo: [PokemonType.ROCK, PokemonType.ELECTRIC, PokemonType.ICE],
      immuneTo: [PokemonType.GROUND],
    },
  },
  [PokemonType.POISON]: {
    offensive: {
      superEffective: [PokemonType.GRASS, PokemonType.FAIRY],
      notVeryEffective: [
        PokemonType.POISON,
        PokemonType.GROUND,
        PokemonType.ROCK,
        PokemonType.GHOST,
      ],
      noEffectTo: [PokemonType.STEEL],
    },
    defensive: {
      resistantTo: [
        PokemonType.GRASS,
        PokemonType.FIGHTING,
        PokemonType.POISON,
        PokemonType.BUG,
        PokemonType.FAIRY,
      ],
      weakTo: [PokemonType.GROUND, PokemonType.PSYCHIC],
      immuneTo: [],
    },
  },
  [PokemonType.GROUND]: {
    offensive: {
      superEffective: [
        PokemonType.FIRE,
        PokemonType.ELECTRIC,
        PokemonType.POISON,
        PokemonType.ROCK,
        PokemonType.STEEL,
      ],
      notVeryEffective: [PokemonType.GRASS, PokemonType.BUG],
      noEffectTo: [PokemonType.FLYING],
    },
    defensive: {
      resistantTo: [PokemonType.POISON, PokemonType.ROCK],
      weakTo: [PokemonType.WATER, PokemonType.GRASS, PokemonType.ICE],
      immuneTo: [PokemonType.ELECTRIC],
    },
  },
  [PokemonType.ROCK]: {
    offensive: {
      superEffective: [
        PokemonType.FIRE,
        PokemonType.ICE,
        PokemonType.FLYING,
        PokemonType.BUG,
      ],
      notVeryEffective: [
        PokemonType.FIGHTING,
        PokemonType.GROUND,
        PokemonType.STEEL,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.NORMAL,
        PokemonType.FIRE,
        PokemonType.POISON,
        PokemonType.FLYING,
      ],
      weakTo: [
        PokemonType.WATER,
        PokemonType.GRASS,
        PokemonType.FIGHTING,
        PokemonType.GROUND,
        PokemonType.STEEL,
      ],
      immuneTo: [],
    },
  },
  [PokemonType.BUG]: {
    offensive: {
      superEffective: [
        PokemonType.GRASS,
        PokemonType.PSYCHIC,
        PokemonType.DARK,
      ],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.FIGHTING,
        PokemonType.POISON,
        PokemonType.FLYING,
        PokemonType.GHOST,
        PokemonType.STEEL,
        PokemonType.FAIRY,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.GRASS,
        PokemonType.FIGHTING,
        PokemonType.GROUND,
      ],
      weakTo: [PokemonType.FIRE, PokemonType.FLYING, PokemonType.ROCK],
      immuneTo: [],
    },
  },
  [PokemonType.GHOST]: {
    offensive: {
      superEffective: [PokemonType.PSYCHIC, PokemonType.GHOST],
      notVeryEffective: [PokemonType.DARK],
      noEffectTo: [PokemonType.NORMAL],
    },
    defensive: {
      resistantTo: [PokemonType.POISON, PokemonType.BUG],
      weakTo: [PokemonType.GHOST, PokemonType.DARK],
      immuneTo: [PokemonType.NORMAL, PokemonType.FIGHTING],
    },
  },
  [PokemonType.STEEL]: {
    offensive: {
      superEffective: [PokemonType.ICE, PokemonType.ROCK, PokemonType.FAIRY],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.WATER,
        PokemonType.ELECTRIC,
        PokemonType.STEEL,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.NORMAL,
        PokemonType.GRASS,
        PokemonType.ICE,
        PokemonType.FLYING,
        PokemonType.PSYCHIC,
        PokemonType.BUG,
        PokemonType.ROCK,
        PokemonType.DRAGON,
        PokemonType.STEEL,
        PokemonType.FAIRY,
      ],
      weakTo: [PokemonType.FIRE, PokemonType.FIGHTING, PokemonType.GROUND],
      immuneTo: [PokemonType.POISON],
    },
  },
  [PokemonType.FIRE]: {
    offensive: {
      superEffective: [
        PokemonType.GRASS,
        PokemonType.ICE,
        PokemonType.BUG,
        PokemonType.STEEL,
      ],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.WATER,
        PokemonType.ROCK,
        PokemonType.DRAGON,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.FIRE,
        PokemonType.GRASS,
        PokemonType.ICE,
        PokemonType.BUG,
        PokemonType.STEEL,
        PokemonType.FAIRY,
      ],
      weakTo: [PokemonType.WATER, PokemonType.GROUND, PokemonType.ROCK],
      immuneTo: [],
    },
  },
  [PokemonType.WATER]: {
    offensive: {
      superEffective: [PokemonType.FIRE, PokemonType.GROUND, PokemonType.ROCK],
      notVeryEffective: [
        PokemonType.WATER,
        PokemonType.GRASS,
        PokemonType.DRAGON,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.FIRE,
        PokemonType.WATER,
        PokemonType.ICE,
        PokemonType.STEEL,
      ],
      weakTo: [PokemonType.ELECTRIC, PokemonType.GRASS],
      immuneTo: [],
    },
  },
  [PokemonType.GRASS]: {
    offensive: {
      superEffective: [PokemonType.WATER, PokemonType.GROUND, PokemonType.ROCK],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.GRASS,
        PokemonType.POISON,
        PokemonType.FLYING,
        PokemonType.BUG,
        PokemonType.DRAGON,
        PokemonType.STEEL,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [
        PokemonType.WATER,
        PokemonType.ELECTRIC,
        PokemonType.GRASS,
        PokemonType.GROUND,
      ],
      weakTo: [
        PokemonType.FIRE,
        PokemonType.ICE,
        PokemonType.POISON,
        PokemonType.FLYING,
        PokemonType.BUG,
      ],
      immuneTo: [],
    },
  },
  [PokemonType.ELECTRIC]: {
    offensive: {
      superEffective: [PokemonType.WATER, PokemonType.FLYING],
      notVeryEffective: [
        PokemonType.ELECTRIC,
        PokemonType.GRASS,
        PokemonType.DRAGON,
      ],
      noEffectTo: [PokemonType.GROUND],
    },
    defensive: {
      resistantTo: [
        PokemonType.ELECTRIC,
        PokemonType.FLYING,
        PokemonType.STEEL,
      ],
      weakTo: [PokemonType.GROUND],
      immuneTo: [],
    },
  },
  [PokemonType.PSYCHIC]: {
    offensive: {
      superEffective: [PokemonType.FIGHTING, PokemonType.POISON],
      notVeryEffective: [PokemonType.PSYCHIC, PokemonType.STEEL],
      noEffectTo: [PokemonType.DARK],
    },
    defensive: {
      resistantTo: [PokemonType.FIGHTING, PokemonType.PSYCHIC],
      weakTo: [PokemonType.BUG, PokemonType.GHOST, PokemonType.DARK],
      immuneTo: [],
    },
  },
  [PokemonType.ICE]: {
    offensive: {
      superEffective: [
        PokemonType.GRASS,
        PokemonType.GROUND,
        PokemonType.FLYING,
        PokemonType.DRAGON,
      ],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.WATER,
        PokemonType.ICE,
        PokemonType.STEEL,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [PokemonType.ICE],
      weakTo: [
        PokemonType.FIRE,
        PokemonType.FIGHTING,
        PokemonType.ROCK,
        PokemonType.STEEL,
      ],
      immuneTo: [],
    },
  },
  [PokemonType.DRAGON]: {
    offensive: {
      superEffective: [PokemonType.DRAGON],
      notVeryEffective: [PokemonType.STEEL],
      noEffectTo: [PokemonType.FAIRY],
    },
    defensive: {
      resistantTo: [
        PokemonType.FIRE,
        PokemonType.WATER,
        PokemonType.GRASS,
        PokemonType.ELECTRIC,
      ],
      weakTo: [PokemonType.ICE, PokemonType.DRAGON, PokemonType.FAIRY],
      immuneTo: [],
    },
  },
  [PokemonType.DARK]: {
    offensive: {
      superEffective: [PokemonType.PSYCHIC, PokemonType.GHOST],
      notVeryEffective: [
        PokemonType.FIGHTING,
        PokemonType.DARK,
        PokemonType.FAIRY,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [PokemonType.GHOST, PokemonType.DARK],
      weakTo: [PokemonType.FIGHTING, PokemonType.BUG, PokemonType.FAIRY],
      immuneTo: [PokemonType.PSYCHIC],
    },
  },
  [PokemonType.FAIRY]: {
    offensive: {
      superEffective: [
        PokemonType.FIGHTING,
        PokemonType.DRAGON,
        PokemonType.DARK,
      ],
      notVeryEffective: [
        PokemonType.FIRE,
        PokemonType.POISON,
        PokemonType.STEEL,
      ],
      noEffectTo: [],
    },
    defensive: {
      resistantTo: [PokemonType.FIGHTING, PokemonType.BUG, PokemonType.DARK],
      weakTo: [PokemonType.POISON, PokemonType.STEEL],
      immuneTo: [PokemonType.DRAGON],
    },
  },
};
