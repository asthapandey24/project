
const User = require('../models/user.js');

exports.postAdduser = async(req,res,next)=>{          
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email =  req.body.email;
    const mobilenumber = req.body.mobilenumber;
  const data = await User.create({firstname:firstname, lastname: lastname, email: email,mobilenumber: mobilenumber});
   res.status(201).json({details: data})

   }

   exports.getAdduser = async(req, res, next)=>{

    const users = await User.findAll();
    res.status(200).json({details: users})
 }


 exports.deleteuser = async(req, res) =>{
    //console.log(req.params.id)
  var user_Id = (req.params.id);
  //console.log(user_Id);
  //console.log(user_Id.typeOf())
  await User.destroy({where: {id:user_Id}})
    res.status(200);
 }

//  exports.updatedata = async(req,res,next)=>{
  
//   var user_Id = (req.params.id);
//    const user = await User.findOne({where: {id: user_Id}})
//    if(!user){
//     return res.status(404).json({ error: 'User not found' });
//    }else{
//        const email = req.body.email;
//        const mobilenumber = req.body.mobilenumber;
   

//      await user.save()
//      res.status(200).json({ message: 'User updated successfully' });
//    }
// }