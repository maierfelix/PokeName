# PokéName <a href="https://travis-ci.org/maierfelix/pokename"><img src="https://img.shields.io/travis/maierfelix/pokename/master.svg?style=flat-square" alt="Build Status" /></a>
Fiddle with Pokémon names in different languages
## Install

```
$ npm install --save pokename
```


## Usage

```js
let pkmn = require('pokename');

pkmn.getPokemonNameById(151);
//=> "Mew"

pkmn.getPokemonIdByName("Charmander");
//=> 4

pkmn.getRandomPokemonName();
//=> "Magikarp"

pkmn.getRandomPokemonId();
//=> 85

```

## API

### .getPokemonNameById(id: number) => string


Get pokemon name from ID.

### .getPokemonIdByName(name: string) => number


Get ID from name.

### .getRandomPokemonName() => string


Returns random pokemon name.

### .getRandomPokemonId() => number


Returns random pokemon ID.

### .getLangPackage(lang: string) => object


Get a language package - contains all pokemon names in the given language.