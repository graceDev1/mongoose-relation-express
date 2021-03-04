import dbconnect from '../connection/index';

const ownerSchema = dbconnect.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    cars:[{
        type: dbconnect.Schema.Types.ObjectId,
        ref:'cars',
        required: true
    }]
});

export default dbconnect.model('owner',ownerSchema);