function start (myString, myAng){
  //var string = "ababababababaabaab";
  //var ang = "aba"

  var string = document.getElementById('string').value;
  var ang = document.getElementById('ang').value;

  var tab = [];
  var rslt = [];


  // ALGO

  // CREATION DU TABLEAU

  for (var i = 0; i < string.length; i++) {
    if (string[i+(ang.length - 1)] == undefined)
    continue
    else {
      var temp = string.substring(i, (i + ang.length))
      temp = trier(temp)
      tab.push(temp)
    }
  }


  // COMPARATEUR

  ang = trier(ang)


  for (var k = 0; k < tab.length; k++) {
    if(tab[k] == ang){
      rslt.push(k)
    }
    else
    continue
  }

  //SORTIE
  //console.log(tab)

  document.getElementById('rslt').value = rslt;

}


// Fonction de tri
function trier(par){

  var sort = [];

  var sort = par.split("")
  sort.sort()
  return sort.join("")
}

//start()
