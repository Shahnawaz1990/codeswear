import User from "../../models/User"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
  
    // let userEmail = req.body.email
    let users = await User.find({ email: "any@name.com" })
    console.log(users);

    res.status(200).json({ users: users })
  
}

export default connectDb(handler);