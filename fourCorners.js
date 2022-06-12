const  names = new Set();
const  northSet = new Set();
const  southSet = new Set();
const  eastSet = new Set();
const  westSet = new Set();

//A function to move all remaining participants to the four corners (randomly)
function fourCorners() {
  var numberOfPlayers = names.size;
  var north = document.getElementById("North");
  var south = document.getElementById("South");
  var east = document.getElementById("East");
  var west = document.getElementById("West");

  //empty the four corners
  north.innerHTML = "";
  south.innerHTML = "";
  east.innerHTML = "";
  west.innerHTML = "";
  northSet.clear();
  southSet.clear();
  eastSet.clear();
  westSet.clear();
  //Move players to the four corners
  if (numberOfPlayers == 0) {
    alert(" You Won! ")
    return;
  }
  for (i = 0; i < numberOfPlayers; i++) {
    var temp = Array.from(names)
    var room = Math.floor(Math.random() * 4);
    switch (room) {
      case 0:
        north.innerHTML = north.innerHTML + temp[i] + "<br/>";
        northSet.add(temp[i]);
        break;
      case 1:
        west.innerHTML = west.innerHTML + temp[i] + "<br/>";
        westSet.add(temp[i]);
        break;
      case 2:
        east.innerHTML = east.innerHTML + temp[i] + "<br/>";
        eastSet.add(temp[i]);
        break;
      case 3:
        south.innerHTML = south.innerHTML + temp[i] + "<br/>";
        southSet.add(temp[i]);
        break;
    }
  }
}

//Start again
function resetGame() {
  
  temp = [
    "Kacy",
    "Lucas",
    "Ali",
    "Cheung",
    "Leila",
    "Jeff",
    "Fran",
    "Noah",
    "Eldece",
    "Marwan",
    "Laura",
    "Harry",
    "Tim",
    "Jess",
    "Keziah",
    "Sivanujan",
    "Millie",
    "Tasmiya",
    "Reuben",
    "Ruby",
    "Finley",
    "Oliver"
  ];
  for (var i = 0;i<temp.length;i++) {
    names.add(temp[i])
  }
  fourCorners();
}

//This function is triggered when the central player chooses one of the four corners (by clicking on one of the four butttons)
function clickCorner(corner) {
  alert("You have clicked on " +corner);
  
  if (corner == 'North') {
    for (let i of northSet) {
        names.delete(i)
    }
  }
  else if (corner == 'South') {
    for (let i of southSet) {
        names.delete(i)
    }

  }
  else if (corner == 'West') {
    for (let i of westSet) {
        names.delete(i)
    }

  }
  else {
    for (let i of eastSet) {
        names.delete(i)
    }

  }
  fourCorners();

}
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}
