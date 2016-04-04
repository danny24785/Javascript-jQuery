// Functie
function toonPrompt(){
  var code = prompt('Vul uw promotiecode in', 'Uw code');
  var tekst = 'De code die u invoerde was: ' + code;
  document.getElementById('divResult').innerHTML = tekst;
}