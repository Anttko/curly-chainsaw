const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('express').Router()


router.post('/', async (req, res) => {

    const {username, password} = req.body
    
})