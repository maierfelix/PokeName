var pkmn = null;

function expect(truth) {
  if (!truth) {
    throw new Error();
  }
}

/** TEST SUPPORTED LANGUAGES */

pkmn = require("pokename")("de");
expect(pkmn.getPokemonNameById(1) === "Bisasam");

pkmn = require("pokename")("en");
expect(pkmn.getPokemonNameById(1) === "Bulbasaur");

pkmn = require("pokename")("fr");
expect(pkmn.getPokemonNameById(1) === "Bulbizarre");

pkmn = require("pokename")("ru");
expect(pkmn.getPokemonNameById(1) === "Бульбазавр");

pkmn = require("pokename")("de");
/** FOOL TESTS */
var pkmn2 = require("pokename")("en");

// Different instances
expect(
  pkmn.getPokemonNameById(1) === "Bisasam" &&
  pkmn2.getPokemonNameById(1) === "Bulbasaur"
);

// Auto switch to en
expect(require("pokename")().getPokemonNameById(1) === "Bulbasaur");

// High id pkmn
expect(pkmn.getPokemonNameById(721) === "Volcanion");

// Too low, too high
expect(pkmn.getPokemonNameById(0) === void 0);
expect(pkmn.getPokemonNameById(722) === void 0);

// Random pkmn id
var randId = pkmn.getRandomPokemonId();
expect(typeof randId === "number" && randId >= 1 && randId <= 721);

// Random pkmn name
var randName = pkmn.getRandomPokemonName();
expect(typeof randName === "string");