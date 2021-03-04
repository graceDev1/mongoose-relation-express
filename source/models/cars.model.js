import dbconnect from '../connection/index';

const carSchema = dbconnect.Schema({
    make:{
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner: {
        type:dbconnect.Schema.Types.ObjectId,
        ref:'owner',
        required: false

    }
});

export default dbconnect.model('cars',carSchema);