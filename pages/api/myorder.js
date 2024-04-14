import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";
import jsonwebtoken from "jsonwebtoken";
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken')

const handler = async (req, res) => {
    const token = req.body.token
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(data.email)
    let orders = await Order.find({email: data.email})
    console.log(orders);
    res.status(200).json({orders})
}

export default connectDb(handler)