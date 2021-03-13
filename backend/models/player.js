const { stringify } = require('@angular/compiler/src/util');
const mongoose  = require('mongoose');
const playerSchema = mongoose.Schema({
 name:String,
 poste:String,
 numero:String,
 age:Number
}
);
const player = mongoose.model('Player',playerSchema);
module.exports=player;
