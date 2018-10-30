module.exports.add = (a,b) => a + b;

module.exports.square = (a) => a*a;

module.exports.setName = (user, fullName) => {
	let names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
}

module.exports.asynchAdd = (a, b, callback) => {
	setTimeout(()=>{
		callback(a+b);
	}, 1000);
};

module.exports.asynchSquare = (a, callback) => {
	setTimeout(()=>{
		callback(a*a);
	}, 1000);
};