var userDetails= require('../models/Users.js');
let bcrypt= require('bcryptjs');

//To check existing username in the database
checkUsername=(req,res,next)=>{
let username=req.body.username;
let checkUser=userDetails.findOne({username:username});
checkUser.exec((err,data)=>{
if(err) throw err;
if(data){
  return res.render('index',{msg:"Username already exists"});
}
})
next();
}

//To create user in database

createUser=(req,res,next)=>{
  let name=req.body.name;
  let email= req.body.email;
  let username=req.body.username;
  let password=req.body.password;

  password=bcrypt.hashSync(req.body.password,10);

  let userCreate= new userDetails({
    name,
    email,
    username,
    password
  });
  //console.log(userCreate);

  userCreate.save((err,doc)=>{
  if(err) throw err;
  res.render('index',{msg:"Sucessfully registered"});
});
}




module.exports={
  createUser,checkUsername
}
