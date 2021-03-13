const { stringify } = require('@angular/compiler/src/util');
const mongoose  = require('mongoose');
const teamSchema = mongoose.Schema({
 name:String,
 foundation:String,
 country:String,
 stadium:Number
}
);
const team = mongoose.model('Team',teamSchema);
module.exports=team;
