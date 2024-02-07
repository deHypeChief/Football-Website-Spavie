import User from '../models/registerModel.js';

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dev.hype7@gmail.com',
        pass: '#justHYPE7'
    }
});



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
        res.status(500).json({ error: ' Some fields are missing' });
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

        // Define email content
        let mailOptions = {
            from: 'dev.hype7@gmail.com',
            to: 'dev.hype7@gmail.com',
            subject: 'New Player',
            text: 'This is a test email sent from Node.js.'
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error(error)
            } else {
                console.log('Email sent successfully:', info.response);
            }
        });

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

export { getUsers, registerUser }