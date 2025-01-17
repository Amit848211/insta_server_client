import jwt from "jsonwebtoken"


const generateTokenCookie  = (userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d",
    })


    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:15*3600*24*1000,
        sameSite:"strict"
    })
    return token

}


export default generateTokenCookie