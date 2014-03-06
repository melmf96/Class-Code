/**
 * Main javascript for the class code project for a game app.
 *
 * File:    main.js
 * @author
 * Doc format: JSDoc (http://en.wikipedia.org/wiki/JSDoc)
 */

// Global Name Space
var GameApp = {};

$( document ).ready(function() {
    initialize();

    // TODO: Call a function to get the names of the weapons that can be used to kill the animal passed in as a parameter

    // TODO: console.log the names of the weapons that can  be used with following format
    // "The weapons you can use to kill a [animal name] are:  [weapon name], [weapon name], .... "

});

/**
 * I determine the weapon that can be used to kill the input animal
 *
 * @param {array} weapons An array of Weapon objects
 * @param {string} animal Name of an animal that we check the kill array on each weapon for a match
 * @return {array} weapons An array of weapons that can be used to kill this animal
 */
var killWeapons = function(weapons,animal){
    //TODO: write this function

}
/**
 * Setup the initial weapons array with game data values
 *
 */
var initialize = function(){
   // setup the weapons data in the global namespace, use [ ] notation here, cleaner code, case matters
   GameApp['weapons'] = [
       {
           type: 'Knife',
           killRating: 2,
           pointsNeeded: 10,
           kills: ["Rabbit","Snake","Mouse"]
       },
       {
           type: 'Gun',
           killRating: 5,
           pointsNeeded: 15,
           kills:["Bear","Rabbit","Deer","Tiger"]
       },
       {
           type: 'Bow',
           killRating: 3,
           pointsNeeded: 25,
           kills: ["Rabbit","Skunk","Fox"]
       },
       {
           type: 'Rope',
           killRating: 1,
           pointsNeeded: 5,
           kills: ["Deer","Fox"]
       },
       {
           type: 'Sword',
           killRating: 3,
           pointsNeeded: 20,
           kills: ["Snake","Mouse","Deer"]
       }


   ];

}

