//function alert's try and getElementById's test!
	var shopping = document.getElementById("purchases")
	
	alert(shopping.getAttribute("title"))
	
	shopping.setAttribute("title","a list of foods")
	
	alert(shopping.getAttribute("title"))

	alert(typeof shopping);

	var item = document.getElementsByTagName('li');
	alert(item.length);

	for(var i=0; i<item.length; i++){
		alert(typeof item[i]);
	}
	//you will never know how you suck if you don't try, 
	//just now you did a stupid thing is typing the "," 
	//to replace the should-be ";"! Disappointed!

	var all= document.getElementsByTagName("*");
	
	alert(all.length);