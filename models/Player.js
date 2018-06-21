var mongoose =require('mongoose');
var url =require('url');

const playerSchema = mongoose.Schema({
firstName:{
    type:String,
    required:"First Name is Required"
},
lastName:{
      type:String,
       required:"last Name is Required"
},
team:{
    type:String,
     required:"Team is Required"
},
jersey:{
    type:Number,
     required:"Jersey is Required"
},
url:{
    type:String,
     required:"url is Required"
},


});
module.exports=mongoose.model('Player',playerSchema);