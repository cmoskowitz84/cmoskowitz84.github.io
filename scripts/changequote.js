var review = ["\"Tony J. Harris' performance as Deirdre's newlywed husband brings an innocent juxtaposition to Childress' king. Dressed in white, Harris' performance is forlorn and tragic with the hope of newfound love.\"", 
"Quote 3", 
"Quote 4", 
"Quote 1"];
var newcounter = 0;
var elem = document.getElementById("reviewSpan");
var inst = setInterval(change, 15000);

function change() {
  elem.innerHTML = review[newcounter];
  newcounter++;
  if (newcounter >= review.length) {
    newcounter = 0;
  }
}