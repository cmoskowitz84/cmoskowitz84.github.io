var reviewer = ["Arts-Louisville", 
"Reveiwer 3", 
"Reveiwer 4", 
"Reveiwer 1"];
var counter = 0;
var element = document.getElementById("reviewerSpan");
var inst = setInterval(changereviewer, 15000);

function changereviewer() {
  element.innerHTML = reviewer[counter];
  counter++;
  if (counter >= reviewer.length) {
    counter = 0;
  }
}