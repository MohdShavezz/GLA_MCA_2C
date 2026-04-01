import mongoose from 'mongoose'

const docterSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'patient name is required.'],
    },
    specialization :[String],
    experience :Number,
    available :Boolean,
    hospitalId :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }],
    patients :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]

},{timestamps:true})

export const Docter=mongoose.model('Docter',docterSchema)


