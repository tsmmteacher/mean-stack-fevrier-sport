const { stringify } = require('@angular/compiler/src/util');
const mongoose  = require('mongoose');
const userSchema = mongoose.Schema({
 firstName:String,
 lasstName:String,
 email:String,
 pwd:String
}
);
const user = mongoose.model('User',userSchema);
module.exports=user;
