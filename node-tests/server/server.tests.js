const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
	describe('#GET /', () => {
		it('should return hello world response',(done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect('Hello World')
				.end(done);
		});

		it('should return a 404 error response',(done) => {
			request(app)
				.get('/temp')
				.expect(404)
				.expect((res)=> {
					expect(res.body).toInclude({
						error:'Page not found'
					})
				})
				.end(done);
			});
	});

	describe('#GET /users', () => {
		it('should return a group of users',(done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name:'Rogues',
						age:45
					});
				})
				.end(done);
			});
	});
});
