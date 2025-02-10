function shortcut(s1, s2) {
  // your code here
	if(s1.length <=0 || s2.length <= 0){
		return "";
	}
	
	let r1Result = s1.charAt(0);
	let r2Result = s2.charAt(0);

	return r1Result + r2Result;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");  
alert(shortcut(s1, s2));
