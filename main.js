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


let $a = document.querySelector('.a');
let $b = document.querySelector('.b');
let $btn = document.querySelector('.btn');



$btn.addEventListener("click", (e) => {
	console.log(parser($a.value, $b.value));
	console.log($a.value, $b.value);

	}
)



let parser = (a, b) => {
let arr = [];
let from = Math.min(a[0]);
let to = Math.max(b[1]);
for (let i = from; i <= to; i++) {
	arr.push(i);
}
	return arr;
}

console.log(parser('1', '18'));

