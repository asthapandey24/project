const express=require('express');
const router=express.Router();
const User = require('../models/user.js');
const controllercontrol=require('../controllers/control.js');

router.post('/add-user',controllercontrol.postAdduser);
router.get('/get-user',controllercontrol.getAdduser);
router.delete('/delete-user/:id',controllercontrol.deleteuser);
//router.put('/update-user/:id',controllercontrol.updatedata);

module.exports=router;