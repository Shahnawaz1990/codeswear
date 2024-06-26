import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken')



const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET)
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        if (user) {
            if (user.email == req.body.email && decryptedPass == req.body.password) {
                var token = jwt.sign({email:user.email, name: user.name}, process.env.JWT_SECRET,{
                    expiresIn: "2d"})
                res.status(200).json({success: true, token, user: user })
                
            } else {
                res.status(400).json({ success: false, error: "Invalid Credentials" })
            }
        } else {
            res.status(400).json({ error: "User Not Found" })
        }
    }
}

export default connectDb(handler)