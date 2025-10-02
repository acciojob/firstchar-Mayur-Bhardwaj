function firstChar(text) {
  // your code here
	for(let i=0; i<text.length; i++){
		if(text[i] !== " " && text[i] !== "\t" && text[i] !== "\n" && text[i] !== "\r")
			return text[i];
	}
		return "";
}
let text = "   hello world";
alert(firstChar(text));
