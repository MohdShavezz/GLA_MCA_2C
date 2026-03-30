import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        min: 5,
        max: 20
    },
    age: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'process', 'end'],
        default: 'pending'
    },
    hobbies: [String],
    address: {
        street: String,
        zipcode: Number
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

    }

},{timestamps:true})

export const User=mongoose.model('User',userSchema)
