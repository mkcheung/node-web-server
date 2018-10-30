const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
			let res = utils.add(33,11);
			expect(res).toBe(44).toBeA('number');
		});

		it('should asynch add two numbers', (done) => {
			let res = utils.asynchAdd(4,3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});
	
	describe('#square', () => {
		it('should square a number', () => {
			let res = utils.square(3);

			expect(res).toBe(9).toBeA('number');
		});
		it('should asynch square a number', (done) => {
			let res = utils.asynchSquare(4, (squared) => {
				expect(squared).toBe(16).toBeA('number');
				done();
			});
		});
	});
	
	describe('#check names', () => {
		it('should have a first name and last name', () => {
			let user = {
				age:34
			};

			user = utils.setName(user, 'Rogue Lead');

			expect(user).toInclude({
				firstName:'Rogue',
				lastName:'Lead'
			});
		});
	});
	
	describe('#check expected values', () => {
		it('should expect some values', () => {
			expect({name:'Andrew'}).toEqual({name:'Andrew'});
			expect([2,3,4]).toInclude(2);
			expect([2,3,4]).toExclude(5);
			expect({
				name: 'Andrew',
				age: 25,
				location:'Philedelphia'
			}).toInclude({
				age: 25
			});
		});
	});
});