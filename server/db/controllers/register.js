import User from '../models/registerModel.js';

const registerUser = async (req, res) => {

	const { 
		name,
        email,
        phoneNumber,
        homeAddress,
        state,
        nationality,
        dateOfBirth,
        langues,
        medicalCondition
	} = req.body;


	// check fields
	if (
		!name ||
        !email ||
        !phoneNumber ||
        !homeAddress ||
        !state ||
        !nationality ||
        !dateOfBirth ||
        !langues ||
        !medicalCondition
	) {
		res. status(500).json({ error: ' Some fields are missing' });
	}

	const user = new User({
		name,
        email,
        phoneNumber,
        homeAddress,
        state,
        nationality,
        dateOfBirth,
        langues,
        medicalCondition
	});

	if (user) {
		await user.save();
		res.status(201).json({
			message: 'User created successfully',
		});
	}
	else {
		res.status(400).json({ error: 'Error registering user' });
	}
};




const getUsers = async (req, res) => {
	const getUsers = await User.find()
	res.status(200).json(getUsers)
}

export { getUsers, registerUser}