import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require('crypto-js');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        const {name, email} = req.body
        let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()})
        await u.save()
        
        res.status(200).json({success: "User Successfully Added"})
    } else {
        res.status(400).json({error: "User Not Added"})
    }

}

export default connectDb(handler)