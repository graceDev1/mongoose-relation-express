import dbconnect from '../connection/index';

const productSchema = dbconnect.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    imageUrl: {
        type:String,
        required:true
    },
    customer: {
        type: dbconnect.Schema.Types.ObjectId,
        ref:'customer',
        required: true
    }
});


export default dbconnect.model('product',productSchema);