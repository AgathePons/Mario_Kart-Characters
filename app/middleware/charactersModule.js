const charactersModule = {
  /**
   * render the list of characters list
   */
  characterList: (req, res, next) => {
    const characters = require('../data/marioKartCharacters.json');
    const charactersListPage = true;
    const data = {
      characters: characters,
      currentPage: charactersListPage
    };
    res.render('characters', data);
  },
  /**
   * render the page of 1 character details
   * @param {*} next -> 404
   */
  characterDetail: (req, res, next) => {
    console.log(req.url);
    const characters = require('../data/marioKartCharacters.json');
    const characterDetailPage = true;
    // get character by name
    const character = characters.find(character => character.idName === req.params.characterName);
    if (character) {
      const data = {
        character: character,
        currentPage: characterDetailPage
      };
      res.render('character-template', data);
    } else {
      next();
    }
  },
  randomCharacter: (req, res, next) => {
    const characters = require('../data/marioKartCharacters.json');
    const randomCharacterDetailPage = true;
    const getRandomIndex = () => Math.floor(Math.random() * characters.length);
    const randomIndex = getRandomIndex();
    const character = characters[randomIndex];
    const data = {
      character: character,
      currentPage: randomCharacterDetailPage
    };
    res.render('character-template', data);
  }
};

module.exports = charactersModule;