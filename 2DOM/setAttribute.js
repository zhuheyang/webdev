var paras = document.getElementsByTagName("p");
//you should remember getXXXsByXXX always return an array,
//so when you use this variance, be carefule do not lose the 
//close brackets![]
for (var i = 0; i < paras.length; i++) {
	var title = paras[i].getAttribute("title");
	//or just "if(title){}" is also OK
	if(title === "a gentle reminder"){
	paras[i].setAttribute("title", "A Wonderful World!");
	// console.log(paras[i].getAttribute("title"));
	console.log(paras[i].attributes["title"].value);
	//the two mentioned above is equals, but also have differences!
	//watch the "attributes", you can notice that it is plural.
	//and do not print it wrong! Be careful! NOT "attibute"!
	}
}
