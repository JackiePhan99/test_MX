//bài 2

// let N = prompt('')
// N = parseInt(N)
// for (i = 0; i < N; i++) {
// 	for (j = 0; j <= i; j++) {
// 		document.writeln(" * ")
// 	}
// 	document.writeln("<br/>")
// }



//bài 1

function checkValue() {
	document.getElementById("result").innerHTML = "";
	let $a = document.getElementById("a").value;
	let $b = document.getElementById("b").value;

	if ((Number.isInteger($a) && Number.isInteger($b)) || $b < $a)
		return;
	let arr = [];
	for (let i = $a; i <= $b; ++i) {
		if (num(i)) {
			arr.push(i);
		}
	}
	// console.log(arr.toString());
	document.getElementById("result").innerHTML = arr.toString();
}

function num(n) {
	let flag = true;
	if (n < 2) {
		flag = false;
	} else {
		for (let i = 2; i < n - 1; i++) {
			if (n % i == 0) {
				flag = false;
				break;
			}
		}
	}
	return flag;
}