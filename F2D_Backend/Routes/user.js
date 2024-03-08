const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchUser')
var jwt = require('jsonwebtoken')

const { body, validationResult } = require('express-validator');
const User = require('../models/users');
const JWT_Secret = process.env.JWT_SECRET

router.post(
    '/createuser',
    [
      body('name', 'Enter a valid username'),
      body('email', 'Enter a valid email').isEmail(),
      body('password', 'Password must be at least 5 characters in length').isLength({ min: 5 }),
      body('c_password', 'Password must be at least 5 characters in length').isLength({ min: 5 }),
    ],
    async (req, res) => {
      let success = false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // Check whether the user with this email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ success, error: 'Sorry, a user already exists with this email' });
        }
  
        const salt = await bcrypt.genSalt(10); // Await the genSalt function
        const secPass = await bcrypt.hash(req.body.password, salt);
        const c_secPass = await bcrypt.hash(req.body.c_password, salt);
  
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
          c_password : c_secPass,
        });
  
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server error');
      }
    }
  );

  router.post('/login', [
    body('email', 'Enter a valid email'),
    body('password', 'Password must be at least 5 characters in length').exists(),
  ], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
  
      const{email, password} = req.body; 
      try {
        let user = await User.findOne({email});
  
        if(!user){
        return res.status(400).json({error:'Please try to login with correct credentials' })
        }
        
        const passCompare = await bcrypt.compare(password,user.password);
  
        if(!passCompare){
          
          return res.status(400).json({success, error:'Please try to login with correct credentials' })
        }
        const data = {
          user:{
            id : user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_Secret)
        success = true
        res.status(200).json({ success, authtoken });
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server error');
      }
    });
    router.post('/getUser', fetchUser, async (req, res) => {
      try {
       const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
      
      } catch (error) {
        console.error(error.message); 
        res.status(500).send('Internal Server error');
        }
      });
      
  module.exports = router;