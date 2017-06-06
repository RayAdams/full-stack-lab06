//5 friends array
var friendArray = ['Sara', 'Dom', 'Hadlea', 'Pepper', 'Clint'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
//10 locations array
var locationArray = ['kitchen pantry', 'root celler', 'cold freezer', 'parking lot', 'patio', 'solarium', 'master bath', 'tent', 'swimming pool', 'dining room'];


//20 weapons array
var weaponArray = ['stand mixer', 'steel whisk', 'bottle opener', 'corkscrew', 'butter knife', 'bread maker', 'icecream scoop', 'spoon', 'fork', 'spork','cookie sheet', 'wok', 'skillet', 'pizza cutter', 'veggie peeler', 'plastic wrap', 'butane torch', 'oven door', 'cayenne pepper', 'freezer lid'];



//USING BIND:
// create 100 h3 on page load
for (var i = 1; i < 101; i++) {
    var statement = document.createElement('h3');
    statement.innerHTML = 'Accusation ' + i;
    //set currentFriend to cycle through
    //modulu by 5 using if to cycle through friendsArray
    // currentFriend = friendArray[i];
    // if (i % 5 === 0){
    //     currentFriend = friendArray[i];
    // }
    
    //add click eventListener to all h3
    statement.addEventListener('click', function(){
        alert('I accuse ' + currentFriend + ', with the ' +  weaponArray.random() + ' in the ' + locationArray.random() + '.');
        }.bind(i));
    document.body.appendChild(statement);
}




//readme notes
// You will use the value of i in the loop to determine which of the above array items to use
//     * Make sure you only select valid array indexes
//     * Modulus is your friend
//     * ex: 10 mod 10 is 0, 11 mod 10 is 1, 12 mod 10 is 2, ...

