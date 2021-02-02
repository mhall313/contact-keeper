const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

//Notes on Routes:
//get is to fetch data
//post is submitting to the server
//put is to update on the server
//delete is to delete

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'please include valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //obj you want to send in the token so that the user can immediately log in and access thier specific info with the ID
      const payload = {
        user: {
          id: user.id,
        },
      };

      //to create a token you have to sign it, it takes in the payload, a secret, options which can set the token to expire, and a callback
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
