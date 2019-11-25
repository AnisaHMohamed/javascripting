// console.log("Kitchen stuff to pack:");
// let i = 0;
// while (i < packingList.length) {
//   console.log(packingList[i]);
//   i++;
// }


// range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
// range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
// range(-5, 2, 3);	[ -5, -2, 1 ]
// // The function should return an empty array [] if given incorrect parameters, such as:
// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

let final = [];

let range = (start, end, step) => {
	if(step === undefined || end === undefined||step === undefined || start>end||step<=0){
		console.log(final);
	};

	while ( (start + step) <= (end+step)) {
		final.push(start);
		start = start + step;
	}
	console.log(final);
};
range(0, 10, 2)
