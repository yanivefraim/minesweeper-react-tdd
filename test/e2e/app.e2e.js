'use strict';

const MainPage = require('../pages/main-page.js');
const GamePage = require('../pages/game-page.js');

describe('React application', () => {
  let mainPage, gamePage;

  describe('Main Page', () => {
    beforeEach(function() {
      mainPage = new MainPage();
      gamePage = new GamePage();
    });

    it('should create a new game', () => {
      mainPage.navigate();
      mainPage.newGame();
      expect(gamePage.getRows().count()).toBe(10);
      expect(gamePage.getCells().count()).toBe(100);
    });
  });
});
