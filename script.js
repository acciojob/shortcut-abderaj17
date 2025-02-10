function shortcut(s1, s2) {
  // your code here
	let r1Result = s1.charAt(0);
	let r2Result = s2.charAt(0);

	return r1Result + r2Result;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
