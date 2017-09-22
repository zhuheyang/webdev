var paras = document.getElementsByTagName('p');
for(var i=0; i < paras.length; i++){
	var title_text = paras[i].getAttribute('title');
	if(title_text) alert(title_text);
}
	//although the mentioned above is more concise, but it is not encouraged to act like this, in the later maintainning process, it will cause some unneccessary problem and extra  operating.
	//if you can, use curly braces!