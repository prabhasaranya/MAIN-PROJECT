const mongoose=require('mongoose');
const RegisterSchema=new mongoose.Schema(
    {
        name: {
        type:String,
        required:true,
        },
        empid: {
            type:Number,
            required:true,
        },
        department: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
        },
        contactno: {
            type:Number,
            required:true,
        },
        title: {
            type:String,
            required:true,
        },
        priority:
        {
            type:String,
            required:true,
        },
        issue: {
            type:String,
            required:true,
        },

          date:
         {
            type:Date,
            default:Date.now,
        }
        

            
        
})
const RegisterModel=mongoose.model("registers",RegisterSchema)
module.exports=RegisterModel;