"use strict";

const LANG_DE = require("./lang/pokemon.de.json");
const LANG_EN = require("./lang/pokemon.en.json");
const LANG_FR = require("./lang/pokemon.fr.json");
const LANG_RU = require("./lang/pokemon.ru.json");

/**
 * @param {String} name
 * @return {Boolean}
 */
function isSupportedLanguage(name) {

  if (typeof name === "string") {
    name = name.toLowerCase();
  }
  else return (false);

  return (
    name === "de" ||
    name === "en" ||
    name === "fr" ||
    name === "ru"
  );
}

/**
 * @param {String} name
 * @return {Object}
 */
function getLangPackage(name) {

  if (typeof name === "string") {
    name = name.toLowerCase();
  }
  else return (LANG_EN);

  switch (name) {
    case "de":
      return (LANG_DE);
    break;
    case "en":
      return (LANG_EN);
    break;
    case "fr":
      return (LANG_FR);
    break;
    case "ru":
      return (LANG_RU);
    break;
  };

  return (LANG_EN);

};

// New instance on each export
module.exports = function(name) {

  let PKMN_TABLE = LANG_EN;

  /**
   * @param {Number} id
   * @return {String}
   */
  function getPokemonNameById(id) {
    return (PKMN_TABLE[id]);
  };

  /**
   * @param {String} name
   * @return {Number}
   */
  function getPokemonIdByName(name) {

    var ii = 1;
    var length = Object.keys(PKMN_TABLE).length;

    for (; ii < length; ++ii) {
      if (PKMN_TABLE[ii] === name) return (ii);
    };

    return (0);

  };


  function getPokemonIdByNameIgnoreCase(name) {

    var ii = 1;
    var length = Object.keys(PKMN_TABLE).length;
 
     for (; ii < length; ++ii) {
       if (PKMN_TABLE[ii].toLowerCase() === name.toLowerCase()) return (ii);
     };
 
     return (0);
  }

  /**
   * @return {Number}
   */
  function getRandomPokemonId() {
    return (Math.floor(Math.random() * Object.keys(PKMN_TABLE).length) + 1);
  };

  /**
   * @return {String}
   */
  function getRandomPokemonName() {
    return (PKMN_TABLE[getRandomPokemonId()]);
  };

  if (isSupportedLanguage(name) || name === void 0) {
    PKMN_TABLE = getLangPackage(name || "en");
  }
  else {
    throw new Error("Invalid or unsupported language!");
  }

  return {
    getLangPackage: getLangPackage,
    getPokemonNameById: getPokemonNameById,
    getPokemonIdByName: getPokemonIdByName,
    getRandomPokemonName: getRandomPokemonName,
    getRandomPokemonId: getRandomPokemonId,
    getPokemonIdByNameIgnoreCase: getPokemonIdByNameIgnoreCase
  };

};
