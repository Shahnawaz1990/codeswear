import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken')

const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        
        let u = await User.findOneAndUpdate({email: req.body.email}, {name: req.body.name, address: req.body.address, pincode: req.body.pincode, state: req.body.state, city: req.body.city})
            
        let dbuser = await User.findOne({email: req.body.email})
        const bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET)
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        if (decryptedPass == req.body.password && req.body.npassword == req.body.cpassword){
            let dbuseru = await User.findOneAndUpdate({email: dbuser.email}, {password: CryptoJS.AES.encrypt(req.body.cpassword, process.env.AES_SECRET).toString()})
            res.status(200).json({ success: "Password Updated" })
            return    
        } else{
            res.status(400).json({ error: "Password Not Updated" })
        }
        
        res.status(200).json({ success: "Details Updated" })
    } 
    


    else {
        res.status(400).json({ error: "The function is not working" })
    }
}
export default connectDb(handler)