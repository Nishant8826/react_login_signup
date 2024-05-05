const tryCatch = require("../middleware/tryCatch");
const Error = require("../utils/errorClass");
const usermodel = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = tryCatch(async (req, res, next) => {
    let data = req.body;
    if(!data){
        return next(new Error('Request Body is undefined',400))
    }
    data.password = await bcrypt.hash(data.password, 10);
    data.confirmPassword = data.password;
    const saveData = await usermodel.create(data);
    return res.status(201).send({ success: true, data: saveData });
  });

exports.login = tryCatch(async (req, res, next) => {
    let data = req.body;
    if(!data){
        return next(new Error('Request Body is undefined',400))
    }
    const user = await usermodel.findOne({ email:data.email, isDeleted: false });
    if(!user){
        return next(new Error('Email is not registered',400));
    }
    const validPassword = await bcrypt.compare(data.password, user.password);
    if(!validPassword){
        return next(new Error('Incorrect password',400));
    }
    return res.status(200).send({ status: true, message: "Success", user : user });
  });
