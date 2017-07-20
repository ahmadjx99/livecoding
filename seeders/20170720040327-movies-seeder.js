'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Movie', [{
      name: 'Cintaku Kepentok Sudoku',
      released_year: 2016,
      genre: 'komedi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ratapan di Depan Mac Mini',
      realesed_year: 2014,
      genre: 'drama',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Boogle 2 The Hounting Anchor',
      realesed_year: 2011,
      genre: 'horor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Taubat Intruktur Karena Tugas Tak Dibuat',
      realesed_year: 2008,
      genre: 'religi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heroku wa Heromu da',
      realesed_year: 2008,
      genre: 'animasi',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulk('Movie', null, {});
  }
};
