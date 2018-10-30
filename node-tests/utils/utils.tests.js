const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(33,11);
	if(res != 44){
		throw new Error(`Expected 44 - Got ${res}`);
	}
});

it('should square a number', () => {
	let res = utils.square(3);
	if(res != 9){
		throw new Error(`Expected 9 - Got ${res}`);
	}
});