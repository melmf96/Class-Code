/**
 * Main javascript for the class code project for a game app.
 *
 * File:    main.js
 * @author Mel Flygare
 * Doc format: JSDoc (http://en.wikipedia.org/wiki/JSDoc)
 */

// Global Name Space
var GameApp = {};



$( document ).ready(function() {
    initialize();

    $( "#Hunt" ).click(function(){
        var animal = $( "#Animal").val();
        var points = parseInt($( "#Points").val());
        console.log(animal);
        console.log(points);
        var weaponOptions = choosingYourWeapon(animal,points,GameApp['weapons']);
        console.log(weaponOptions);
        $( "#result").html(weaponOptions);

    })
});
    // TODO: Call a function to get the names of the weapons that can be used to kill the animal passed in as a parameter
/** @param {string} animal Name of an animal we encounter
 * @param {numeric) points Amount of points the user currently has
 * @param (array) weapons An array of possible weapons to use
* @return {object} weapon Weapon that you can use to kill the animal you encountered
 */
var choosingYourWeapon = function(animal,points,weapons){

    var weaponChoices = [];
    var availableWeapons = getAvailableWeaponsByPoints(weapons,points);
    var validWeapons = killWeapons(weapons,animal);
    var validWeaponsLength = validWeapons.length;
    for (var i=0; i < validWeaponsLength; i++){
        var Weapon = validWeapons[i];
        var availableWeaponsLength = availableWeapons.length;
        for (var j=0; j < availableWeaponsLength; j++){
            var weaponOption = availableWeapons[j];
            if (weaponOption === Weapon){
                weaponChoices.push(Weapon.type);
            }

        }
    }
    return "You can use these weapons (" + weaponChoices.toString() + ") to kill a " + animal + " with " + points + " points.";
}

var getAvailableWeaponsByPoints = function(weapons,points){
    var availableWeapons = [];
    var weaponsLength = weapons.length;
    var i=0;
    while(i < weaponsLength){
        var Weapon = weapons[i];
        if( points >= Weapon['pointsNeeded']){
            availableWeapons.push(Weapon);
        }
        i++;
    }
    return availableWeapons;
}


var describeAllWeapons = function (weapons) {
    var weaponsLength = weapons.length;
    for (var i = 0; i < weaponsLength; i++) {
        var Weapon = weapons[i];
        var desc = describeWeapon(Weapon);
        console.log(desc);
    }
}
var describeWeapon = function(Weapon){
    var desc = "";
    if(Weapon === undefined){
        alert('describeWeapon not called with a valid input parameter');
    } else {
        desc = "The properties of your weapon are \n";
        var counter = 1; // Aesthetic detail. 1: ETC 2: ETC
        for( var prop in Weapon){
            //create line with counter, property and property value
            var line = counter.toString() + ". " + prop + ": " + Weapon[prop] + "\n";
            //now add the line to the current description
            desc += line; // desc = desc + line
            counter++; //increment for next notation. No runaway loops.
        }
    }
    return desc; // return description of weapon or empty string if undefined
}
    // TODO: console.log the names of the weapons that can  be used with following format
    // "The weapons you can use to kill a [animal name] are:  [weapon name], [weapon name], .... "


/**
 * I determine the weapon that can be used to kill the input animal
 *
 * @param {array} weapons An array of Weapon objects
 * @param {string} animal Name of an animal that we check the kill array on each weapon for a match
 * @return {array} weapons An array of weapon names that can be used to kill this animal
 */
var killWeapons = function(weapons,animal){
 //TODO: write this function
    var weaponsLength = weapons.length;
    var validWeapons = [];
    for (var i = 0; i < weaponsLength; i++) {
        var Weapon = weapons[i];
        var weaponsKillLength = Weapon['kills'].length;
        for (var j = 0; j < weaponsKillLength; j++){
            var killAnimal = Weapon['kills'][j];
            if (killAnimal === animal){
                validWeapons.push(Weapon);
            }
        }
    }
    return validWeapons;
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

