import  mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	class: {
		type: Number,
		default: 0,
	},
});

const User = mongoose.model("User", UserSchema);

export default User;