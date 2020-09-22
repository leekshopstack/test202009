var express = require("express");
var app = express();

generateNumber = () => {
	const digitLenght = 2;
	let uniqueDate = Date.now();
	let digitNumber = [uniqueDate];
	
	for(i = 0; i < digitLenght; i++) {
		digitNumber.push(Math.floor(Math.random() * 10));
	}

	return digitNumber.join('');
}

app.get("/generates-numbers", (req, res, next) => {
	res.json({
		cardNO: generateNumber()
	});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});