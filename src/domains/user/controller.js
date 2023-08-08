const User = require("./model");
const { hashData } = require("./../../util/hashdata");

const createNewUser = async (data) => {
    try {
        const { name, email, password } = data;

        // checks if the user is already in the system
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("User with the provided email already exists");
        }
        // hash password
        const hashedPassword = await hashData(password);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        // save the user
        const createdUser = await newUser.save();
        return createdUser; // Return the created user object, not the function itself
    } catch (error) {
        throw error; // Rethrow the error
    }
};

module.exports = { createNewUser };
