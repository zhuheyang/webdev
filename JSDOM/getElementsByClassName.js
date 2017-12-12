function eg(node, classname){
	if(node.getElementsByClassName){
		return node.getElementsByClassName("classname");
		//be plural!!!!!
	}
	else{
	var results = new Array();
	var elems = node.getElementsByTagName('*');
	for(var i=0; i< elems.length; i++){
		//if node's classname equals the sent classname, then assign the value to it!
		//to which? to the results array, watch!
		if(elems[i].className.indexOf(classname) != -1){
			results[results.length] = elems[i];
		}
		return results;
	}
}

//the new way to get the elements by its classname.
//use the new built method eg!
var shopping = document.getElementById('purchases');
var sales = eg(shopping, "sale");
alert('sales.length');

//the normal way to get the elements by its classname.
//use function getElementsByClassName
var salessss = document.getElementById("purchases");
var sales = salessss.getElementsByClassName("sale")
alert(sales.length);

//you should not let this happen again, no matter is it TagName or ClassName, 
//if it has more than one, then it should be the getElements 
//but not just getElement!!!!!
//be plural!!!!!