$( document ).ready(function() {

    var weapons = [
        {
            type : 'knife',
            killRating: 2
        },

        {
            type : 'gun',
            killRating: 5
        },

        {
            type : 'bow',
            killRating: "bad"
        }
    ];

    var weaponLength = weapons.length;
    //use a saved length instead of calculating in each loop
    for ( var i = 0; i < weaponLength; i++){
        describeWeapon(weapons[i]);
    }
});

var describeWeapon = function(weapon){

    if (typeof weapon.killRating != "number"){
        alert("Weapon type " + weapon.type + " has a non-numeric kill rating");
    }

    console.log("Your weapon is " + weapon.type);
    console.log("Your kill rating is " + weapon.killRating);
}
