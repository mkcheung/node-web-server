const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app'); 

describe('App', () =>{
	let db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Rogue', 36);
		expect(spy).toHaveBeenCalledWith('Rogue', 36);
	});

	it('should call saveUser ', () => {
		let email = 'm@m.com';
		let password = '12345'

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});