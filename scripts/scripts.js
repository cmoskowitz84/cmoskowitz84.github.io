//Review Script//
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


//Reviewer Script//
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


//Contact Form Script//
var formmodal = document.getElementById('contactForm');
var formbtn = document.getElementById("openForm");
var formspan = document.getElementsByClassName("close")[0];

formbtn.onclick = function showForm() {
    formmodal.style.display = "block";
}

formspan.onclick = function hideForm() {
    formmodal.style.display = "none";
}

window.onclick = function hideForm2(event) {
    if (event.target == formmodal) {
        formmodal.style.display = "none";
    }
}


//Email Script//
window.onload = function sendMail() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		this.contact_number.value = Math.random() * 100000 | 0;
		emailjs.sendForm('gmail', 'template_7cLd0D2C', this);
		var elementyetagain = document.getElementById("success_message");
		if (elementyetagain.className === "success_message") {
			elementyetagain.className += " responsive";
		}
    });
}


//Nav Menu Script//
function navMenu() {
    var x = document.getElementById("socialLinks");
    if (x.className === "socialLinks") {
        x.className += " responsive";
    } else {
        x.className = "socialLinks";
    }
}



//Gallery Box Script//
var galmodal = document.getElementById('galleryBox');
var galbtn = document.getElementById("openGallery");
var galspan = document.getElementsByClassName("galclose")[0];

galbtn.onclick = function showGallery() {
    galmodal.style.display = "block";
}

galspan.onclick = function hideGal() {
    galmodal.style.display = "none";
}

window.onclick = function hideGal2(event) {
    if (event.target == galmodal) {
        galmodal.style.display = "none";
    }
}