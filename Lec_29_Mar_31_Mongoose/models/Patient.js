import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'patient name is required.'],
        min:3,
        max:30
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },
    desease:String,
    admitted:{
        type:Boolean,
        default:false
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                // Convert the number to a string for regex testing
                return /^\d{1,10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid number (must be 1-10 digits)`
        }
    },
    addresss:{
        city:String,
        pincode:Number
    },

},{timestamps:true})

export const Patient=mongoose.model('Patient',patientSchema)


