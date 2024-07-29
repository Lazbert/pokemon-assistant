interface PokemonTypeDetails {
  superEffective: string[];
  weakTo: string[];
  noEffectTo: string[];
  notVeryEffective: string[];
  immuneTo: string[];
}

enum PokemonType {
  NORMAL = "normal",
  FIGHTING = "fighting",
  FLYING = "flying",
  POISON = "poison",
  GROUND = "ground",
  ROCK = "rock",
  BUG = "bug",
  GHOST = "ghost",
  STEEL = "steel",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
  ELECTRIC = "electric",
  PSYCHIC = "psychic",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  FAIRY = "fairy",
}

export const POKEMON_TYPE_RELATIONSHIPS: Record<
  PokemonType,
  PokemonTypeDetails
> = {
  normal: {
    superEffective: [],
    weakTo: ["fighting"],
    noEffectTo: ["ghost"],
    notVeryEffective: [],
    immuneTo: ["ghost"],
  },
  fighting: {
    superEffective: ["normal", "rock", "steel", "ice", "dark"],
    weakTo: ["flying", "poison", "bug", "psychic", "fairy"],
    noEffectTo: [],
    notVeryEffective: ["rock", "bug", "dark"],
    immuneTo: [],
  },
  flying: {
    superEffective: ["fighting", "bug", "grass"],
    weakTo: ["rock", "electric", "ice"],
    noEffectTo: [],
    notVeryEffective: ["bug", "grass"],
    immuneTo: [],
  },
  poison: {
    superEffective: ["grass", "fairy"],
    weakTo: ["ground", "psychic"],
    noEffectTo: ["steel"],
    notVeryEffective: ["poison", "bug", "grass", "fairy"],
    immuneTo: [],
  },
  ground: {
    superEffective: ["poison", "rock", "steel", "fire", "electric"],
    weakTo: ["water", "grass", "ice"],
    noEffectTo: ["flying"],
    notVeryEffective: ["bug", "grass"],
    immuneTo: ["electric"],
  },
  rock: {
    superEffective: ["flying", "bug", "fire", "ice"],
    weakTo: ["fighting", "ground", "steel", "water"],
    noEffectTo: [],
    notVeryEffective: ["normal", "flying", "poison", "fire"],
    immuneTo: [],
  },
  bug: {
    superEffective: ["grass", "psychic", "dark"],
    weakTo: ["fire", "flying", "rock"],
    noEffectTo: [],
    notVeryEffective: ["fighting", "ground", "grass"],
    immuneTo: [],
  },
  ghost: {
    superEffective: ["ghost", "psychic"],
    weakTo: ["ghost", "dark"],
    noEffectTo: ["normal", "fighting"],
    notVeryEffective: ["poison", "bug"],
    immuneTo: ["normal", "fighting"],
  },
  steel: {
    superEffective: ["rock", "ice", "fairy"],
    weakTo: ["fire", "fighting", "ground"],
    noEffectTo: ["poison"],
    notVeryEffective: [
      "normal",
      "flying",
      "rock",
      "bug",
      "steel",
      "grass",
      "psychic",
      "ice",
      "dragon",
      "fairy",
    ],
    immuneTo: ["poison"],
  },
  fire: {
    superEffective: ["bug", "steel", "grass", "ice"],
    weakTo: ["water", "rock", "ground"],
    noEffectTo: [],
    notVeryEffective: ["fire", "water", "rock", "dragon"],
    immuneTo: [],
  },
  water: {
    superEffective: ["fire", "ground", "rock"],
    weakTo: ["grass", "electric"],
    noEffectTo: [],
    notVeryEffective: ["water", "steel"],
    immuneTo: [],
  },
  grass: {
    superEffective: ["water", "ground", "rock"],
    weakTo: ["fire", "ice", "poison, flying, bug"],
    noEffectTo: [],
    notVeryEffective: ["grass", "electric, steel, fire, poison, flying, bug"],
    immuneTo: [],
  },
  electric: {
    superEffective: ["water", "flying"],
    weakTo: ["ground"],
    noEffectTo: ["ground"],
    notVeryEffective: ["grass", "electric", "dragon"],
    immuneTo: [],
  },
  psychic: {
    superEffective: ["fighting", "poison"],
    weakTo: ["bug", "ghost", "dark"],
    noEffectTo: [],
    notVeryEffective: ["fight, psychic"],
    immuneTo: [],
  },
  ice: {
    superEffective: ["flying", "ground", "grass", "dragon"],
    weakTo: ["fire", "fighting", "rock", "steel"],
    noEffectTo: [],
    notVeryEffective: ["ice"],
    immuneTo: [],
  },
  dragon: {
    superEffective: ["dragon"],
    weakTo: ["ice", "dragon", "fairy"],
    noEffectTo: ["normal", "fighting"],
    notVeryEffective: ["fire", "water", "electric, grass"],
    immuneTo: [],
  },
  dark: {
    superEffective: ["ghost", "psychic"],
    weakTo: ["fighting", "bug", "fairy"],
    noEffectTo: ["psychic"],
    notVeryEffective: ["dark", "fighting"],
    immuneTo: ["psychic"],
  },
  fairy: {
    superEffective: ["fighting", "dragon", "dark"],
    weakTo: ["poison", "steel"],
    noEffectTo: ["dragon"],
    notVeryEffective: ["fire", "poison, steel"],
    immuneTo: ["dragon"],
  },
};
