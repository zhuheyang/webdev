var simon = document.getElementById('simon');
var bruce = document.getElementById('bruce');
var ben = document.getElementById('ben');

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){
	var allImages = document.querySelectorAll("img");

	for(var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if(pic.className === "hide") {
			pic.className = "";
		} else{
			pic.className = "hide";
			} 
}

// simon.addEventListener("click", function() {
// 	if(simonPic.className === "hide") {
// 		simonPic.className = "";
// 	} else{
// 		simonPic.className = "hide";
// 	}
// });

// bruce.addEventListener("click", function() {
// 	if(brucePic.className === "hide") {
// 		brucePic.className = "";
// 	} else{
// 		brucePic.className = "hide";
// 	}
// });

// ben.addEventListener("click", function() {
// 	if(benPic.className === "hide") {
// 		benPic.className = "";
// 	} else{
// 		benPic.className = "hide";
// 	}
// });











/*var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('add-sum');


numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	var sum = one + two;
	addSum.innerHTML = "your sum is " + sum;

	// I think you should trouble on this is right! you should be familiar with vi or vim
	// and in this case you can be soft with sublime, as you see, the cursor shortcut in sublime is truly poor to you 
	// so in respect to your skills, you should not only learn well with the bash script type, but also with the vim type,
	// that is your point now!!!!but as I can see, you should move quickly to next point, or else you will still be nothing done 
	// today, holy fuck! I agree that your experience about the textor is important, but this is a problem you can fix more quickly 
	// than you just did, next time you face this, do it quickly than you have done before!
}*/