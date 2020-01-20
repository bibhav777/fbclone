var userDetails= require('../models/Users.js');
var bcrypt=require('bcryptjs');

userCheck = (req,res,next)=>{
let username = req.body.username;
let password=req.body.lpassword;
let useCheck=userDetails.findOne({username:username});
useCheck.exec((err,data)=>{
if(err) throw err;
var datapassword=data.password;
if(bcrypt.compareSync(password,datapassword)){
res.render('index',{msg:"Login Sucessfull"});

}else {
res.render('index',{msg:"Login Failed"});
}


});

}





module.exports={
  userCheck
}
