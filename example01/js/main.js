/**
 * Main javascript for the class code project for a game app. Personally I am not in favor of violent games
 * involving weapons or killing, even if it it's robots.
 *
 * File:    main.js
 * @author  Ron Fuller
 * Doc format: JSDoc (http://en.wikipedia.org/wiki/JSDoc)
 */

/* Global variables using a global name space, just global variables are bad, setup a namespace object */
var GameApp = {};   // Capitalize first as this is a new object, this is a
                    // global object container to hold variables specific to the game, referenced anywhere

/* jQuery ready is called on window load, use this to call any functions we need to initialize or setup the app */
$( document ).ready(function() {

    // Initialize the game by setting up all our configuration data
    initialize();
    console.log("==== All available weapons ===\n");    // just add a heading for the descriptions of all weapons
    // We initialized the global weapon data , now we can describe all the weapons
    describeAllWeapons(GameApp['weapons']);
    // Need to find out what weapons this player can use given their current amount of gained points
    var points = 18;        // this is the current player's points. We'll just set to a test value for now
    var availableWeapons = getAvailableWeapons(GameApp['weapons'],points);
    // now output the weapons that are available for this amount of points
    console.log("==== Available weapons for " + points + " points ====\n");
    // now describe all the weapons again, this time only with the available weapons we got based on our points
    describeAllWeapons(availableWeapons);
});

/**
 * I take an array of weapons and a current points value. I loop through the weapons and determine if
 * this weapon should be includeded in the output results based on the weapon's points needed
 *
 * @param {array} weapons An array of weapon objects
 * @param {number} points Total amount of points player has to obtain a weapon
 * @return {array} an array of Weapons that are available to the player based on points needed and points total
 */
var getAvailableWeapons = function(weapons,points){
    var availableWeapons = [];      // initially, we don't have any available weapons
    var weaponsLength = weapons.length; // need array length of weapons for iteration
    // *** use a while loop here only for demonstration, normally a for loop is better for array iteration
    var i=0;    // set the index before the while loop, we need to cover condition that weapons might be empty array
    while(i < weapons.length){
        var Weapon = weapons[i];    // pull the Weapon object out of the weapons array at the array index
        if( points >= Weapon['pointsNeeded']){
            availableWeapons.push(Weapon);  // we have the required amount of points for this weapon, add to available
        }
        i++;    // increment i or we'll get a runaway loop
    }
    return availableWeapons;
}

/**
 * I take an array of weapons and output a list of weapons that include their properties and values
 *
 * @param {array} weapons An array of weapon objects
 */
var describeAllWeapons = function(weapons){
    var weaponsLength = weapons.length;   // get the length ahead of time for array iterations
    for( var i=0; i < weaponsLength; i++){
        var Weapon = weapons[i];  // get the weapon object at the array index
        var desc = describeWeapon(Weapon);  // call describeWeapon with our weapon object and store return
                                            // human readable string listing properties and values
        console.log(desc);  // just log the description for now, eventually we'll present in the browser
    }
}

/**
 * I describe the weapon object by creating a string of the properties and values of the weapon
 *
 * @param {object} Weapon The input weapon object containing property name/value pairs
 * @return {string} Human-readable representation of the weapon properties and their values
 */
var describeWeapon = function(Weapon){
    var desc = "";      // this is the resulting description we will return, we need to initialize to an empty value
    // test to see if we have a valid Weapon
    if( Weapon === undefined){
        alert('describeWeapon called without a valid Weapon input parameter');
    } else {
        // we need to set the initial description string before listing properties, \n is a new line character
        // we'll use newline for now because we are using console.log if html we would use the line break <br />
        desc = "The properties of your weapon are: \n";
        // we need to find the properties of the weapons object using a for ... in loop
        // the value of prop will be "type,killRating,pointsNeeded" for the current definition of Weapon
        var counter = 1;    // we need a counter for each property in the weapon to list the properties
        for( var prop in Weapon) {
            // create a line with the counter, property, and property value
            var line = counter.toString() + ". " + prop + " - " + Weapon[prop] + "\n";
            // now add the line to the current description
            desc += line;       // we can use the shorthand notaion where desc = desc + line is the same as desc += line
            counter++;          // increment for next property
        }

    }
    return desc;    // return the description of the weapon, or empty string if undefined Weapon input parameter

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
           pointsNeeded: 10
       },
       {
           type: 'Gun',
           killRating: 5,
           pointsNeeded: 15
       },
       {
           type: 'Bow',
           killRating: 3,
           pointsNeeded: 25
       },
       {
           type: 'Rope',
           killRating: 1,
           pointsNeeded: 5
       },
       {
           type: 'Sword',
           killRating: 3,
           pointsNeeded: 20
       },


   ];

}

