import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'patient name is required.'],
    },
    location: String,
    capacity: Number,
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Docter'
    }],
    patients :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]

}, { timestamps: true })

export const Hospital = mongoose.model('Hospital', hospitalSchema)


