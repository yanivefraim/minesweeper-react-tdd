'use strict';

function GamePage() {
  this.navigate = function(urlParams) {
    browser.get('/new');
  };

  this.getRows = function() {
    return $$('.row');
  };

  this.getCells = function() {
    return $$('.cell');
  };
}

module.exports = GamePage;
