//5 friends array
var friendArray = ['Sara', 'Sam', 'Hadlea', 'Pepper', 'Clint'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
//10 locations array
var locationArray = ['kitchen pantry', 'root celler', 'cold freezer', 'parking lot', 'patio', 'solarium', 'master bath', 'tent', 'swimming pool', 'dining room'];

//20 weapons array
var weaponArray = ['stand mixer', 'steel whisk', 'bottle opener', 'corkscrew', 'butter knife', 'bread maker', 'icecream scoop', 'spoon', 'fork', 'spork','cookie sheet', 'wok', 'skillet', 'pizza cutter', 'veggie peeler', 'plastic wrap', 'butane torch', 'oven door', 'cayenne pepper', 'freezer lid'];

//USING A Closure:
function logFriend(i) {
    return function(){
        alert('I accuse ' + friendArray[i % 5]  + ', with the ' +  weaponArray.random() + ' in the ' + locationArray.random() + '.');
    }
}

// create 100 h3
for (var i = 1; i <= 100; i++) {
    var statement = document.createElement('h3');
    statement.innerHTML = 'Accusation ' + i;
    //create alert message
    var friend = logFriend(i-1);
    statement.addEventListener('click', friend);
    document.body.appendChild(statement);
}
