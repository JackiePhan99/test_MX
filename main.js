let N = prompt('')
N = parseInt(N)
for (i = 0; i < N; i++) {
	for (j = 0; j <= i; j++) {
		document.writeln(" * ")
	}
	document.writeln("<br/>")
}



let $a = document.querySelector('.a');
let $b = document.querySelector('.b');



	let parser = (str) => {
	let arr = [];
	let parts = str.split('-');
	let from = Math.min(parseInt(parts[0]), parseInt(parts[1]));
	let to = Math.max(parseInt(parts[0]), parseInt(parts[1]));
	for (let i = from; i <= to; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(parser('$a-$b'));

function kiem_tra_snt(n) {
	var flag = true;
	if (n < 2) {
		flag = false;
	}
	else if (n == 2) {
		flag = true;
	}
	else if (n % 2 == 0) {
		flag = false;
	}
	else {
		for (var i = 3; i < Math.sqrt(n); i += 2) {
			if (n % i == 0) {
				flag = false;
				break;
			}
		}
	}


	if (flag == true) {
		document.write(n + " là số nguyên tố <br/>");
	}
	else {
		document.write(n + " không phải là số nguyên tố <br/>");
	}
}

kiem_tra_snt(parser);