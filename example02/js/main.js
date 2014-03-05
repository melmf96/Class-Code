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


$( document ).ready(function() {

    function describeWeapon(weapon) {


        //use a saved length instead of calculating in each loop
        for (var i = 0; i < weaponLength; i++) {
            if (typeof weapon[i].killRating != "number") {
                alert("Weapon type " + weapon[i].type + " has a non-numeric kill rating");
            }

            console.log("Your weapon is " + weapon[i].type);
            console.log("Your kill rating is " + weapon[i].killRating);

         };
    };
    describeWeapon(weapons);
})



