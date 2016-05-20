'use strict';

function MainPage() {
  this.navigate = function(urlParams) {
    browser.get('/');
  };

  this.newGame = function() {
    $('.new-game').click();
  };
}

module.exports = MainPage;
