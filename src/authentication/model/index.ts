import  mongoose from 'mongoose';

const bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

const LoginSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique : true
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	}
});

LoginSchema.pre('save', function(next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err: any, salt: any) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err: any, hash: any) {
			if (err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});
     
LoginSchema.methods.comparePassword = function(candidatePassword: String, cb: Function) {
	bcrypt.compare(candidatePassword, this.password, function(err: Object, isMatch: Boolean) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};


const Login = mongoose.model('Login', LoginSchema);

export default Login;